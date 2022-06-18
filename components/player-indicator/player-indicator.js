import React from "react";
import { AppText } from "../custom-text/text";
import { CabContainer, JeyseyNo } from "./player-indicator-style";

export const PlayerCab = ({ item, showPlayDetail }) => {
  return (
    // jeyseyNo is used as unique Id
    <CabContainer onClick={() => showPlayDetail(item["Jersey Number"])}>
      <JeyseyNo jeyseyNo={item["Jersey Number"]}>
        {item["Jersey Number"]}
      </JeyseyNo>
      <AppText variant="heading" fontSize={14} textAlign="center">
        {item["Player Name"]}
      </AppText>
    </CabContainer>
  );
};
