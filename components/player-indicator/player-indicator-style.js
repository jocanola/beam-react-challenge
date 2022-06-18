import { Pane } from "evergreen-ui";
import styled from "styled-components";

export const CabContainer = styled(Pane)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;
export const JeyseyNo = styled(Pane)`
  width: 32px;
  height: 32px;
  background-color: ${({ theme, jeyseyNo }) =>
    jeyseyNo ? theme.ui.primary : theme.neutral.bg2};
  border-radius: 50px;
  color: ${({ theme }) => theme.text.normal};
  border: ${({ theme, jeyseyNo }) =>
    jeyseyNo ? "none" : `2px solid ${theme.text.number}`};
  text-align: center;
  padding-top: 1px;
  margin: 0 auto;
`;
