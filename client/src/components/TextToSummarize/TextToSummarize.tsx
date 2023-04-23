import React, { FC } from "react"
import { CopyContainer, TextArea } from "./TextToSummarize.styles";
import { useSummary } from "../../contexts/useSummary";
import { DefaultButton } from "../../SharedComponents/SharedComponents";

export interface ICurrentProps {
  toggleRecent: () => void;
}

/** holds the copy form where the user enters in the text they wish to summarise */
const TextToSummarize: FC<ICurrentProps> = ({ toggleRecent }) => {
  const { createSummary } = useSummary();
  const [text, setText] = React.useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  /** creates a summary and toggles the state so the recent summary will render */
  const createHandler = async () => {
    await createSummary(text);
    toggleRecent();
  }
  

  
  return (
    <CopyContainer>
      <h3>What would you like to summarize?</h3>
      <TextArea placeholder="Paste the text you wish to summarise - then hit the button below" onChange={changeHandler} />
      <DefaultButton text="Summarize!" onClick={() => createHandler()} />
    </CopyContainer>
  )
}

export default TextToSummarize
