import { Pane } from "evergreen-ui";
import React, { useContext } from "react";
import { PlayerContext } from "../../store/contexts/context";
import { AppText } from "../custom-text/text";
import {
  Divider,
  Frame,
  PlayerCard,
  PlayerInfo,
  PlayerNo,
  PlayerRecord,
  PlayersName,
} from "./player-details-card-style";

export const PlayerCardDetail = ({ currentPlayerJerseyNo, isError }) => {
  const { starters } = useContext(PlayerContext);
  const currentPlayer = starters?.find(
    (item) => item["Jersey Number"] === currentPlayerJerseyNo
  );
  return (
    <PlayerCard>
      {!isError && currentPlayer !== undefined && (
        <>
          <Frame image={currentPlayer["Player Image"]}>
            <PlayerNo>{currentPlayer["Jersey Number"]} </PlayerNo>

            <PlayersName>
              <AppText variant="heading" fontSize="24px" LineHeight="27px">
                {currentPlayer["Player Name"]}
              </AppText>
              <br />
              <AppText
                variant="heading"
                fontSize="18px"
                brand={true.toString()}
              >
                {currentPlayer["Position"]}
              </AppText>
            </PlayersName>
          </Frame>
          <Pane display="flex" justifyContent="space-between">
            <PlayerInfo>
              <AppText variant="normal">Height</AppText>

              <AppText variant="heading">{currentPlayer["Height"]}</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="normal">Weight</AppText>

              <AppText variant="heading">{currentPlayer["Weight"]}</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="normal">Nationality</AppText>

              <AppText variant="heading">
                {currentPlayer["Nationality"]}
              </AppText>
            </PlayerInfo>
          </Pane>
          <Divider />
          <PlayerRecord>
            <PlayerInfo>
              <AppText
                variant="heading"
                fontSize="36px"
                brand={true.toString()}
              >
                {currentPlayer["Appearances"]}
              </AppText>
              <AppText variant="normal">Appearances</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText
                variant="heading"
                fontSize="36px"
                brand={true.toString()}
              >
                {currentPlayer["Minutes Played"]}
              </AppText>
              <AppText variant="normal">Minutes Played</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText
                variant="heading"
                fontSize="36px"
                brand={true.toString()}
              >
                {currentPlayer["Position"] === "Goalkeeper"
                  ? currentPlayer["Clean Sheets"]
                  : currentPlayer["Goals "]}
              </AppText>
              <AppText variant="normal">
                {currentPlayer["Position"] === "Goalkeeper"
                  ? "Clean sheets"
                  : "Goals"}
              </AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText
                variant="heading"
                fontSize="36px"
                brand={true.toString()}
              >
                {currentPlayer["Position"] === "Goalkeeper"
                  ? currentPlayer["Saves"]
                  : currentPlayer["Assists"]}
              </AppText>
              <AppText variant="normal">
                {currentPlayer["Position"] === "Goalkeeper"
                  ? "Saves"
                  : "Assists"}
              </AppText>
            </PlayerInfo>
          </PlayerRecord>
        </>
      )}
    </PlayerCard>
  );
};
