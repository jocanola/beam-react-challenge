import React, { useContext, useState } from "react";
import {
  DeleteIcon,
  EditIcon,
  Image,
  Pane,
  Paragraph,
  Popover,
  Table,
  Text,
} from "evergreen-ui";
import { TableStyle, TableHeader, TableRow } from "./table.style";
import { AppText } from "../custom-text/text";
import { PlayerContext } from "../../store/contexts/context";
import Modal from "../dialog/custom-dialog";
import { DELETE_PLAYER } from "../../store/actions/actions-type";
import Importer from "../importer/importer";
import { PlayerAction } from "./action-components/player-action";
import { ConfirmAlert } from "./action-components/confirm-delete";
import { headers } from "../../util/data/positions";
import { EditPlayer, NewEditPlayer } from "./action-components/edit-player";

export const TableComp = () => {
  const { dispatcher, players, filteredPlayer } = useContext(PlayerContext);
  const [isShown, setIsShown] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);
  const [isShownEdit, setIsShownEdit] = useState(false);
  const [selectedJerseyNo, setSelectedJerseyNo] = useState();
  //filter player by name or position

  //Deleting players
  const handleDeletePlayer = () => {
    dispatcher({
      type: DELETE_PLAYER,
      id: selectedJerseyNo,
    });
    setIsShownConfirm(false);
  };
  return (
    <>
      <Modal title="Action" show={isShown} onClose={() => setIsShown(false)}>
        <PlayerAction
          handleConfirm={() => {
            setIsShown(false);
            setIsShownConfirm(true);
          }}
          showEdit={() => {
            setIsShown(false);
            setIsShownEdit(true);
          }}
        />
      </Modal>
      <Modal
        title="Are you sure?"
        show={isShownConfirm}
        onClose={() => setIsShownConfirm(false)}
      >
        <ConfirmAlert
          handleDeletePlayer={handleDeletePlayer}
          handleClose={() => setIsShownConfirm(false)}
        />
      </Modal>
      <Modal
        title="Edit Player?"
        show={isShownEdit}
        onClose={() => setIsShownEdit(false)}
      >
        <EditPlayer
          handleClose={() => setIsShownEdit(false)}
          id={selectedJerseyNo}
        />
      </Modal>
      <TableStyle>
        <TableHeader>
          {players.length > 0 && (
            <>
              {headers.map((item) =>
                item === "Player Name" ? (
                  <Table.TextHeaderCell
                    flexBasis={240}
                    flexShrink={0}
                    flexGrow={0}
                    alignItems="center"
                    width={240}
                    display="flex"
                  >
                    {item}
                  </Table.TextHeaderCell>
                ) : (
                  <Table.TextHeaderCell>{item}</Table.TextHeaderCell>
                )
              )}
              <Table.TextHeaderCell flexBasis={24} flexShrink={0} flexGrow={0}>
                Edit
              </Table.TextHeaderCell>
            </>
          )}
          {players <= 0 && (
            <>
              <Table.TextHeaderCell flexBasis={240} flexShrink={0} flexGrow={0}>
                Player Name
              </Table.TextHeaderCell>
              <Table.TextHeaderCell flexBasis={140} flexShrink={0} flexGrow={0}>
                Jersey Number
              </Table.TextHeaderCell>
              <Table.TextHeaderCell>Position</Table.TextHeaderCell>
              <Table.TextHeaderCell>Height</Table.TextHeaderCell>
              <Table.TextHeaderCell>Weight</Table.TextHeaderCell>
              <Table.TextHeaderCell>Nationality</Table.TextHeaderCell>
            </>
          )}
        </TableHeader>
        <Table.Body>
          {filteredPlayer?.length > 0 ? (
            filteredPlayer.map((player, i) => (
              <TableRow key={i} isSelectable>
                <Table.TextCell
                  flexBasis={240}
                  flexShrink={0}
                  flexGrow={0}
                  alignItems="center"
                  width={240}
                  display="flex"
                >
                  <Pane alignItems="center" display="flex" gap="8px">
                    <Image
                      src={player["Flag Image"]}
                      width={24}
                      height={24}
                      borderRadius="50%"
                    />
                    <AppText variant="normal">{player["Player Name"]}</AppText>
                  </Pane>
                </Table.TextCell>

                <Table.TextCell>
                  <AppText variant="normal">{player["Jersey Number"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Starter"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Position"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Height"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Weight"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Nationality"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Appearances"]}</AppText>
                </Table.TextCell>
                <Table.TextCell>
                  <AppText variant="normal">{player["Minutes Played"]}</AppText>
                </Table.TextCell>
                <Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}>
                  <AppText
                    variant="heading"
                    onClick={() => {
                      setIsShown(true);
                      setSelectedJerseyNo(player["Jersey Number"]);
                    }}
                  >
                    ...
                  </AppText>
                  {/* <span onClick={}> ...</span> */}
                </Table.TextCell>
              </TableRow>
            ))
          ) : (
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              width="100%"
            >
              <Pane textAlign="center">
                <AppText variant="normal">
                  You do not have any players on the roster
                </AppText>
                <br />
                <Importer />
              </Pane>
            </Pane>
          )}
        </Table.Body>
      </TableStyle>
    </>
  );
};
