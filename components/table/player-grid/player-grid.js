import React from "react";
import {
  CabContainer,
  ImageCard,
  PlayerText,
} from "./player-grid-style";

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
