import { Pane, EditIcon } from "evergreen-ui";
import React, { FormEvent, useContext, useState } from "react";
import { PlayerContext } from "../../store/contexts/context";
import { AppButton } from "../button/button";
import { AppText } from "../custom-text/text";
import Modal from "../dialog/custom-dialog";
import Importer from "../importer/importer";
import { AppInput } from "../input/input.style";
import { Search } from "../search/search";
import { HeaderContainer } from "./header.style";

export const Header = ({ isPitch }) => {
  const [isShown, setIsShown] = useState(false);
  const [teamName, setTeamName] = useState("");

  const [Name, setName] = useState("");
  function handleChange(e) {
    setTeamName(e.currentTarget.value);
  }

  const onSubmit = () => {
    setName(teamName);
  };
  return (
    <HeaderContainer>
      <Pane>
        <AppText variant="normal" brand>
          Roster Details
        </AppText>
        <br />
        <AppText variant="heading">{teamName || "Team Name"}</AppText>
        <Modal
          title="Add Team Name"
          show={isShown}
          onClose={() => setIsShown(false)}
        >
          <Pane>
            <AppText variant="normal">Enter Team Name</AppText>
            <AppInput placeholder="PSG" onChange={handleChange} />
            <AppButton
              type="submit"
              variant="primary"
              brand
              onClick={() => {
                onSubmit();
                setIsShown(false);
              }}
            >
              Submit
            </AppButton>
          </Pane>
        </Modal>
        <span onClick={() => setIsShown(true)}>
          <EditIcon color="white" marginLeft={8} />
        </span>
      </Pane>
      {!isPitch && (
        <Pane display="flex" gap="8px">
          <Search />
          <Importer />
        </Pane>
      )}
    </HeaderContainer>
  );
};
