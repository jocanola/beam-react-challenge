import { DeleteIcon, EditIcon, Pane } from "evergreen-ui";
import { AppText } from "../../custom-text/text";

export const PlayerAction = ({ handleConfirm, showEdit }) => {
  return (
    <Pane width={233} display="flex" flexDirection="column" gap={15}>
      <Pane
        display="flex"
        alignItems="center"
        gap={15}
        cursor="pointer"
        onClick={showEdit}
      >
        <EditIcon color="white" />
        <AppText variant="normal">Edit Player</AppText>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        gap={15}
        cursor="pointer"
        onClick={handleConfirm}
      >
        <DeleteIcon color="white" />
        <AppText variant="normal">Delete Player</AppText>
      </Pane>
    </Pane>
  );
};
