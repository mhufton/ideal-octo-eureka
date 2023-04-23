import React, { FC } from 'react'
import { useSummary } from '../../contexts/useSummary';
import { ICurrentProps } from '../TextToSummarize/TextToSummarize';
import { DefaultButton } from '../../SharedComponents/SharedComponents';
import { SummaryContainer, SummaryItem } from '../../SharedStyles/SharedStyles';

const RecentSummary: FC<ICurrentProps> = ({ toggleRecent }) => {
  const { summary } = useSummary();

  return (
    <SummaryContainer>
      <SummaryItem>{summary ? summary.summary : <p>Ooops! Something went wrong. Please go back and try again.</p>}</SummaryItem>
      <DefaultButton text="Create another summary" onClick={() => toggleRecent()} />
    </SummaryContainer>
  )
}

export default RecentSummary