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
import { isEdited } from "../../../util/functions/helpers-functions";

import { useForm, Controller } from "react-hook-form";

export const EditPlayer = ({ handleClose, id }) => {
  const { players, dispatcher } = useContext(PlayerContext);
  const player = players?.find((item) => item["Jersey Number"] === id);
  const CountryFlag = findFlagUrlByNationality(player["Nationality"]);

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      "Player Name": player["Player Name"],
      "Jersey Number": player["Jersey Number"],
      Weight: player["Weight"],
      Height: player["Height"],
      Nationality: player["Nationality"],
      Position: player["Position"],
      "Flag Image": CountryFlag,
      Starter: player["Starter"],
    },
  });

  const handleSaveEdit = (data) => {
    const newCountryFlag = findFlagUrlByNationality(data["Nationality"]);
    const newPlayerData = { ...player, ...data, "Flag Image": newCountryFlag };
    dispatcher({ type: EDIT_PLAYER, data: newPlayerData });
    handleClose();
  };

  return (
    <Pane width={480} display="flex" flexDirection="column" gap={5}>
      <Pane display="flex" alignItems="center" gap={15} cursor="pointer">
        <Pane>
          <AppText variant="normal">Player name</AppText>
          <Controller
            name="Player Name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AppInput placeholder="Jokanola" width="274px" {...field} />
            )}
          />
        </Pane>
        <Pane>
          <AppText variant="normal">Jersey Number</AppText>
          <Controller
            name="Jersey Number"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AppInput
                disabled
                placeholder="Jokanola"
                width="100%"
                {...field}
              />
            )}
          />
        </Pane>
      </Pane>

      <Pane display="flex" alignItems="center" gap={15} cursor="pointer">
        <Pane flex="0.5">
          <AppText variant="normal">Weight</AppText>
          <Controller
            name="Weight"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AppInput placeholder="Jokanola" width="100%" {...field} />
            )}
          />
        </Pane>
        <Pane flex="0.5">
          <AppText variant="normal">Height</AppText>
          <Controller
            name="Height"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AppInput placeholder="Jokanola" width="100%" {...field} />
            )}
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
          <Controller
            name="Nationality"
            control={control}
            render={({ field }) => (
              <AppInputSelect data={countries} field={field} />
            )}
          />
        </Pane>
        <Pane flex="1" width="100%">
          <AppText variant="normal">Position</AppText>
          <Controller
            name="Position"
            control={control}
            render={({ field }) => (
              <AppInputSelect data={position} field={field} />
            )}
          />
        </Pane>
      </Pane>
      <Controller
        name="Starter"
        control={control}
        render={({ field }) => (
          <RadioComponent
            defaultValue={getValues("Starter")}
            setValue={setValue}
          />
        )}
      />

      <Pane display="flex" justifyContent="flex-end" gap={15}>
        <AppButton variant="secondary" onClick={handleClose}>
          Cancel
        </AppButton>
        <AppButton
          variant="primary"
          brand={true.toString()}
          onClick={handleSubmit(handleSaveEdit)}
          disabled={!isDirty}
        >
          Edit Player
        </AppButton>
      </Pane>
    </Pane>
  );
};
