import styled from "styled-components";
import { ButtonsRow, CardCenteredCol } from "../../SharedStyles/SharedStyles";

export const SummarizeContainer = styled(CardCenteredCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 10px 10px 37px 0px rgba(140,140,140,1);

  max-height: 500px;
  max-width: 500px;
  min-height: 350px;
  min-width: 400px;

  background-color: #efefef;
`; 

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`; 