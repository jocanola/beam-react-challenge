import { Pane, Text } from "evergreen-ui";
import styled from "styled-components";

export const PlayerCard = styled(Pane)`
  width: 322px;
  height: 541px;
  background-color: ${({ theme }) => theme.neutral.bg1};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Frame = styled(Pane)`
  width: 100%;
  height: 258px;
  background-image: linear-gradient(
      180deg,
      rgba(34, 34, 34, 0) 0%,
      rgba(34, 34, 34, 0.38) 60.94%,
      #222222 100%
    ),
    url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/* 1 */

export const PlayerNo = styled(Text)`
  font-size: 41.14px;
  line-height: 62px;
  color: ${({ theme }) => theme.ui.primary};
  &::first-letter {
    font-size: 109.71px;
    line-height: 100px;
    margin-top: 20px;
    color: ${({ theme }) => theme.ui.primary};
    opacity: 0.5;
  }
`;

export const PlayersName = styled(Pane)``;

export const PlayerInfo = styled(Pane)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PlayerRecord = styled(Pane)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: space-between;
  grid-row-gap: 16px;
`;

export const Divider = styled(Pane)`
  width: 100%;
  border: 1px solid #494949;
`;
