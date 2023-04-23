import styled from "styled-components";
import { CopyContainer } from "../components/TextToSummarize/TextToSummarize.styles";

export const Button = styled.button`
  background-color: ${(p) => p.theme.buttonColor};
  width: 48%;
  border-radius: 10px;
  border-style: none;
  padding: 5px 15px;
  color: ${(p) => p.theme.secondary};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  transition: all 0.1s ease;
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:first-child {
    margin-right: 5px;
  }
`;


//#region Cards

export const CardCenteredCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.cardBg};
  padding: 15px;
  border-radius: 10px;
  height: 200px;
  width: 200px;
  box-shadow: 10px 10px 37px 0px rgba(140,140,140,1);
  button {
    margin-top: 10px;
  }
`;

export const SummaryContainer = styled(CopyContainer)`
  justify-content: space-between;
  height: 100%;
  margin-top: 5px;
`;

export const SummaryItem = styled.div`
  overflow-y: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

//#endregion

//#region Forms

export const FormCenteredCol = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input { 
    padding: 5px 10px;
    border-radius: 10px;
    border-style: none;
    margin-bottom: 5px;
    
    &:focus {
      outline: none;
    }
  }
`;

//#endregion