import { Pane, Text } from "evergreen-ui";
import styled from "styled-components";

export const CabContainer = styled(Pane)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ImageCard = styled(Pane)`
  width: 32px;
  height: 32px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  border-radius: 50px;
  text-align: center;
`;
export const PlayerText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  margin: 5px 2px;
`;
