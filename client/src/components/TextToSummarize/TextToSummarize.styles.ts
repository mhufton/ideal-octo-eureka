import styled from "styled-components";

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  h1 {
    margin-bottom: 20px;
  }
`;

export const TextArea = styled.textarea`
  width: 400px;
  max-height: 400px;
  min-height: 200px;
  resize: none;
`;
