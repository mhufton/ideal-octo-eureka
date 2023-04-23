import styled from "styled-components"
import { SummaryContainer } from "../../SharedStyles/SharedStyles"

export const SummaryMap = styled(SummaryContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
  bottom: 12px;
  height: 90%;
`
