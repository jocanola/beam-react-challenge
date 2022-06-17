import { Pane, WarningSignIcon } from "evergreen-ui";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { PlayerContext } from "../../store/contexts/context";
import { AppText } from "../../components/custom-text/text";
import { PlayerCardDetail } from "../../components/player-details-card/player-details.card";
import { PlayerCab } from "../../components/player-indicator/player-indicator";
import { Field, PickContainer, WarningContainer } from "./pitch.style";
import { Header } from "../../components/header/header";
import { usePlayerPosition } from "../../util/custom-hooks/usePosition";
import Modal from "../../components/dialog/custom-dialog";

export const Pitch = ({ starters }) => {
  const [currentPlay, setCurrentPlay] = useState(1);
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    err: "",
    desc: "",
    isError: false,
  });
  const { players: midfielders } = usePlayerPosition("midfielder");
  const { players: defenders } = usePlayerPosition("defender");
  const { players: forwards } = usePlayerPosition("forward");
  const { players: goalKeeper, playersLength } =
    usePlayerPosition("goalkeeper");

  // const {play}
  const showPlayDetail = (id: number | string) => setCurrentPlay(id);
  useEffect(() => {}, [goalKeeper]);
  useEffect(() => {
    console.log("lenght", goalKeeper);
    if (starters.length <= 0) {
      setErrorMsg({
        err: "No player data found",
        desc: "Please importer your roster first",
        isError: true,
      });
    }

    if (starters.length < 11) {
      setErrorMsg({
        err: "Not enough starters",
        desc: "Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation",
        isError: true,
      });
    }
    if (starters.length > 11) {
      setErrorMsg({
        err: "There are too many starters",
        desc: "Your team has too many starters for one or more of the positions in the 4-3-3 formation.",
        isError: true,
      });
    }
  }, [starters]);

  return (
    <>
      {errorMsg.isError && (
        <WarningContainer showHeader={false} show={show}>
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
          currentPlay={currentPlay}
          starters={starters}
          isError={errorMsg.isError}
        />
      </PickContainer>
    </>
  );
};
