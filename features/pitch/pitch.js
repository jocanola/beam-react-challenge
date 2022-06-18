import { Pane, WarningSignIcon } from "evergreen-ui";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { PlayerContext } from "../../store/contexts/context";
import { AppText } from "../../components/custom-text/text";
import { PlayerCardDetail } from "../../components/player-details-card/player-details.card";
import { PlayerCab } from "../../components/player-indicator/player-indicator";
import { Field, PickContainer, WarningContainer } from "./pitch.style";
import { Header } from "../../components/header/header";
import { getPlayerByPosition } from "../../util/functions/team-by-position";

export const Pitch = ({ starters }) => {
  const currentGoalKeeper = starters?.find(
    (item) => item.Position === "Goalkeeper" && item.Starter === "Yes"
  );

  const [currentPlay, setCurrentPlay] = useState(
    currentGoalKeeper ? currentGoalKeeper["Jersey Number"] : ""
  );
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    err: "",
    desc: "",
    isError: false,
  });
  const { teamByPosition: midfielders, teamLength: totalMidfielders } =
    getPlayerByPosition(starters, "midfielder");
  const { teamByPosition: defenders, teamLength: totalDefenders } =
    getPlayerByPosition(starters, "defender");
  const { teamByPosition: forwards, teamLength: totalForwards } =
    getPlayerByPosition(starters, "forward");
  const { teamByPosition: goalKeeper, teamLength: totalGoalKeeper } =
    getPlayerByPosition(starters, "goalkeeper");

  // const {play}
  const showPlayDetail = (id) => setCurrentPlay(id);
  const checkpositionInfo =
    totalGoalKeeper === 1 &&
    totalDefenders === 4 &&
    totalForwards === 3 &&
    totalMidfielders === 3;
  useEffect(() => {
    if (starters.length <= 0) {
      setErrorMsg({
        err: "No player data found",
        desc: "Please importer your roster first",
        isError: true,
      });
    }

    if (starters.length <= 11 && starters.length > 0) {
      if (!checkpositionInfo) {
        setErrorMsg({
          err: "Not enough starters",
          desc: "Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation",
          isError: true,
        });
      }
    }
    if (starters.length > 11) {
      setErrorMsg({
        err: "There are too many starters",
        desc: "Your team has too many starters for one or more of the positions in the 4-3-3 formation.",
        isError: true,
      });
    }
  }, [starters, checkpositionInfo]);

  return (
    <>
      {errorMsg.isError && (
        <WarningContainer show={show}>
          <Pane width="379px" padding="15px">
            <WarningSignIcon color="warning" marginRight={16} />
            <AppText variant="heading">{errorMsg.err}</AppText>
            <br />
            <AppText variant="normal">{errorMsg.desc}</AppText>
          </Pane>
        </WarningContainer>
      )}
      <PickContainer>
        <Field image="./Field.png">
          {/* Goal keeper */}
          {!errorMsg.isError && (
            <>
              <Pane className="item">
                {goalKeeper?.map((item) => (
                  <PlayerCab item={item} showPlayDetail={showPlayDetail} />
                ))}
              </Pane>
              {/* Defenders */}
              <Pane className="item">
                {defenders?.map((item) => (
                  <PlayerCab item={item} showPlayDetail={showPlayDetail} />
                ))}
              </Pane>

              <Pane className="item">
                {midfielders?.map((item) => (
                  <PlayerCab item={item} showPlayDetail={showPlayDetail} />
                ))}
              </Pane>
              <Pane className="item">
                {forwards?.map((item) => (
                  <PlayerCab item={item} showPlayDetail={showPlayDetail} />
                ))}
              </Pane>
            </>
          )}
        </Field>
        <PlayerCardDetail
          currentPlayerJerseyNo={currentPlay}
          isError={errorMsg.isError}
        />
      </PickContainer>
    </>
  );
};
