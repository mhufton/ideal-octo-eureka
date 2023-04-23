import React from "react"
import { useSummary } from "../../contexts/useSummary";
import { DefaultButton } from "../../SharedComponents/SharedComponents";
import { CopyContainer, TextArea } from "../TextToSummarize/TextToSummarize.styles";
import RecentSummary from "../RecentSummary/RecentSummary";
import TextToSummarize from "../TextToSummarize/TextToSummarize";
import { SummaryContainer } from "../../SharedStyles/SharedStyles";

/** holds the text box to create a summary or the recent summary and the ability to toggle between each */
const SummaryForm = () => {
  const { getSummary } = useSummary();
  const [toggleRecent, setToggleRecent] = React.useState<boolean>(false);

  /** toggles the state to render the recent summary */
  const toggleRecentHandler = () => {
    setToggleRecent(!toggleRecent);
  }

  return (
    <CopyContainer>
      {toggleRecent
        ? <RecentSummary toggleRecent={toggleRecentHandler} />
        : <TextToSummarize toggleRecent={toggleRecentHandler} />}
    </CopyContainer>
  )
}

export default SummaryForm
