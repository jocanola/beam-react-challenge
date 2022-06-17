import { Pane } from "evergreen-ui";
import React from "react";
import { playerProps } from "../../custom-types";
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

interface playerCardPropsTypes {
  currentPlay: number;
  starters: playerProps[];
  isError: boolean;
}
// interface playerDataPropsType{
// key: string | number: string | number
// }
export const PlayerCardDetail = ({
  currentPlay,
  starters,
  isError,
}: playerCardPropsTypes) => {
  const playerDetails: any = starters.find(
    (item: playerProps) => item["Jersey Number"] === currentPlay
  );

  return (
    <PlayerCard>
      {!isError && (
        <>
          <Frame image={playerDetails["Player Image"]}>
            <PlayerNo>{playerDetails["Jersey Number"]} </PlayerNo>

            <PlayersName>
              <AppText variant="heading" fontSize="24px" LineHeight="27px">
                {playerDetails["Player Name"]}
              </AppText>
              <br />
              <AppText variant="heading" fontSize="18px" brand>
                {playerDetails["Position"]}
              </AppText>
            </PlayersName>
          </Frame>
          <Pane display="flex" justifyContent="space-between">
            <PlayerInfo>
              <AppText variant="normal">Height</AppText>

              <AppText variant="heading">{playerDetails["Height"]}</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="normal">Weight</AppText>

              <AppText variant="heading">{playerDetails["Weight"]}</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="normal">Nationality</AppText>

              <AppText variant="heading">
                {playerDetails["Nationality"]}
              </AppText>
            </PlayerInfo>
          </Pane>
          <Divider />
          <PlayerRecord>
            <PlayerInfo>
              <AppText variant="heading" fontSize="36px" brand>
                {playerDetails["Appearances"]}
              </AppText>
              <AppText variant="normal">Appearances</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="heading" fontSize="36px" brand>
                {playerDetails["Minutes Played"]}
              </AppText>
              <AppText variant="normal">Minutes Played</AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="heading" fontSize="36px" brand>
                {currentPlay === 1
                  ? playerDetails["Clean Sheets"]
                  : playerDetails["Goals "]}
              </AppText>
              <AppText variant="normal">
                {currentPlay === 1 ? "Clean sheets" : "Goals"}
              </AppText>
            </PlayerInfo>
            <PlayerInfo>
              <AppText variant="heading" fontSize="36px" brand>
                {currentPlay === 1
                  ? playerDetails["Saves"]
                  : playerDetails["Assists"]}
              </AppText>
              <AppText variant="normal">
                {currentPlay === 1 ? "Saves" : "Assists"}
              </AppText>
            </PlayerInfo>
          </PlayerRecord>
        </>
      )}
    </PlayerCard>
  );
};
