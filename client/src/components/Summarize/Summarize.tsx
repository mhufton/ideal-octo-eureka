import React from 'react'
import { Content, SummarizeContainer } from './Summarize.styles'
import { useSummary } from '../../contexts/useSummary';
import { DefaultButton } from '../../SharedComponents/SharedComponents';
import { ISummaryDto } from '../../dtos/ISummaryDto';
import { useNavigate } from 'react-router-dom';
import { ButtonsRow } from '../../SharedStyles/SharedStyles';
import SummaryForm from '../CurrentSummary/CurrentSummary';
import Summaries from '../Summaries/Summaries';

/** think of this as HOME - holds the summary copy form and the summarised reponse from the backend */
const Summarize = () => {
  const [toggleSumOrList, setToggleSumOrList] = React.useState<boolean>(true);

  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <SummarizeContainer>
      <ButtonsRow>
        <DefaultButton text='Log Out' onClick={signOut} />
        <DefaultButton text={toggleSumOrList ? "Get All Summaries" : "Summarize Text"} onClick={() => setToggleSumOrList(!toggleSumOrList)} />
      </ButtonsRow>
      <Content>
        {toggleSumOrList ? <SummaryForm /> : <Summaries />}
      </Content>
    </SummarizeContainer>
  )
}

export default Summarize