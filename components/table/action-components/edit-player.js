import { DeleteIcon, EditIcon, Pane } from "evergreen-ui";
import React, { useContext, useState } from "react";
import { countries, findFlagUrlByNationality } from "country-flags-svg";
import { AppButton } from "../../button/button";
import { AppText } from "../../custom-text/text";
import { AppInputSelect } from "../../input-selection/input-selection";
import { AppInput } from "../../input/input.style";
import { position } from "../../../util/data/positions";
import { PlayerContext } from "../../../store/contexts/context";
import { EDIT_PLAYER } from "../../../store/actions/actions-type";
import { RadioComponent } from "../../radio-button/radio-button.style";

export const EditPlayer = ({ handleClose, id }) => {
  const { players, dispatcher } = useContext(PlayerContext);
  const player = players?.find((item) => item["Jersey Number"] === id);

  const [pName, setPName] = useState(player["Player Name"]);
  const [pJerseyNo, setPJerseyNo] = useState(player["Jersey Number"]);
  const [Weight, setPWeight] = useState(player["Weight"]);
  const [Height, setPHeight] = useState(player["Height"]);
  const [Nationality, setPNationality] = useState(player["Nationality"]);
  const [Position, setPPosition] = useState(player["Position"]);
  const [Starter, setPStarter] = useState(player["Starter"]);
  const countryFlag = findFlagUrlByNationality(Nationality);

  const data = {
    "Player Name": pName,
    "Jersey Number": pJerseyNo,
    Weight,
    Height,
    Nationality,
    Position,
    "Flag Image": countryFlag,
    Starter,
  };

  const newData = { ...player, ...data };

  console.log(newData);
  const handleSaveEdit = () => {
    dispatcher({ type: EDIT_PLAYER, data: newData });
    handleClose();
  };
  return (
    <Pane width={480} display="flex" flexDirection="column" gap={5}>
      <Pane display="flex" alignItems="center" gap={15} cursor="pointer">
        <Pane>
          <AppText variant="normal">Player name</AppText>
          <AppInput
            placeholder="Jokanola"
            width="274px"
            defaultValue={player["Player Name"]}
            onChange={(e) => setPName(e.target.value)}
          />
        </Pane>
        <Pane>
          <AppText variant="normal">Jersey Number</AppText>
          <AppInput
            placeholder="Jokanola"
            width="100%"
            defaultValue={player["Jersey Number"]}
            onChange={(e) => setPJerseyNo(e.target.value)}
          />
        </Pane>
      </Pane>

      <Pane display="flex" alignItems="center" gap={15} cursor="pointer">
        <Pane flex="0.5">
          <AppText variant="normal">Weight</AppText>
          <AppInput
            placeholder="Jokanola"
            width="100%"
            defaultValue={player["Weight"]}
            onChange={(e) => setPWeight(e.target.value)}
          />
        </Pane>
        <Pane flex="0.5">
          <AppText variant="normal">Height</AppText>
          <AppInput
            placeholder="Jokanola"
            width="100%"
            defaultValue={player["Height"]}
            onChange={(e) => setPHeight(e.target.value)}
          />
        </Pane>
      </Pane>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={5}
        cursor="pointer"
      >
        <Pane flex="1" width="100%">
          <AppText variant="normal">Nationality</AppText>
          <AppInputSelect
            data={countries}
            defaultValue={player["Nationality"]}
            handleChange={setPNationality}
            value={Nationality}
          />
        </Pane>
        <Pane flex="1" width="100%">
          <AppText variant="normal">Position</AppText>
          <AppInputSelect
            data={position}
            defaultValue={player["Position"]}
            handleChange={setPPosition}
            value={Position}
          />
        </Pane>
      </Pane>
      <RadioComponent
        defaultValue={player["Starter"]}
        setPStarter={setPStarter}
      />
      <Pane display="flex" justifyContent="flex-end" gap={15}>
        <AppButton variant="secondary" onClick={handleClose}>
          Cancel
        </AppButton>
        <AppButton variant="primary" brand onClick={handleSaveEdit}>
          Edit Player
        </AppButton>
      </Pane>
    </Pane>
  );
};
