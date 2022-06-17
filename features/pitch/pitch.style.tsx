import { Pane, Text } from "evergreen-ui";
import styled from "styled-components";

export const PickContainer = styled(Pane)`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  z-index: 1;
`;

export const Field = styled(Pane)`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  align-items: center;
  justify-items: space-between;
  border-radius: 8px;
  height: 541px;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`;

export const WarningContainer = styled(Pane)`
  background-color: ${({ theme }) => theme.neutral.bg1};
  z-index: 999;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 8px;
`;
