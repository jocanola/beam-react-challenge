import React from "react";
import { AppText } from "../../custom-text/text";
import {
  CabContainer,
  ImageCard,
  PlayerText,
} from "../player-grid/player-grid-style";

export const PlayerGrid = ({
  playerName = "L. Messi",
  countryImg = "./Costarica.png",
}) => {
  return (
    <CabContainer>
      <ImageCard image={countryImg} />
      <PlayerText>{playerName}</PlayerText>
    </CabContainer>
  );
};
