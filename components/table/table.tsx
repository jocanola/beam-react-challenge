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
import { ConfirmAlert, EditPlayer, PlayerAction } from "./action";
import Modal from "../dialog/custom-dialog";
import { DELETE_PLAYER } from "../../store/actions/actions-type";
import { playerProps } from "../../custom-types";
import Importer from "../importer/importer";
export const TableComp = () => {
  const { inputValue, dispatcher, players }: any = useContext(PlayerContext);
  const [isShown, setIsShown] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);
  const [isShownEdit, setIsShownEdit] = useState(false);
  const [selectedJerseyNo, setSelectedJerseyNo] = useState();
  //filter player by name or position
  const filteredPlayer = players.filter(
    (item: playerProps) =>
      item["Player Name"].toLowerCase().includes(inputValue.toLowerCase()) ||
      item["Position"].toLowerCase().includes(inputValue.toLowerCase())
  );

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
          {/* {headers.map((item) => (
          <Table.TextHeaderCell fontSize={12}>{item}</Table.TextHeaderCell>
        ))} */}
          <Table.TextHeaderCell flexBasis={240} flexShrink={0} flexGrow={0}>
            Player Name
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexBasis={140} flexShrink={0} flexGrow={0}>
            Jersey Number
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            <AppText variant="heading" fontSize="12px">
              Starter
            </AppText>
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>Position</Table.TextHeaderCell>
          <Table.TextHeaderCell>Height</Table.TextHeaderCell>
          <Table.TextHeaderCell>Weight</Table.TextHeaderCell>
          <Table.TextHeaderCell>Nationality</Table.TextHeaderCell>
          <Table.TextHeaderCell>Appearances</Table.TextHeaderCell>
          <Table.TextHeaderCell flexBasis={160} flexShrink={0} flexGrow={0}>
            Minutes Played
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            flexBasis={24}
            flexShrink={0}
            flexGrow={0}
          ></Table.TextHeaderCell>
        </TableHeader>
        <Table.Body>
          {filteredPlayer?.length > 0 ? (
            filteredPlayer.map((player: playerProps, i: number) => (
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
                  <Text
                    onClick={() => {
                      setIsShown(true);
                      setSelectedJerseyNo(player["Jersey Number"]);
                    }}
                  >
                    ...
                  </Text>
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
      </TableStyle>{" "}
    </>
  );
};
