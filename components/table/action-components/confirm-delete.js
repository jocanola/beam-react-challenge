import { Pane } from "evergreen-ui";
import { AppButton } from "../../button/button";
import { AppText } from "../../custom-text/text";

export const ConfirmAlert = ({ handleDeletePlayer, handleClose }) => (
  <Pane width={233} display="flex" flexDirection="column" gap={15}>
    <Pane>
      <AppText variant="normal">This action cannot be undone.</AppText>
    </Pane>
    <Pane display="flex" justifyContent="flex-end" gap={15}>
      <AppButton variant="secondary" onClick={handleClose}>
        Cancel
      </AppButton>
      <AppButton
        variant="primary"
        brand={true.toString()}
        onClick={handleDeletePlayer}
      >
        Delete
      </AppButton>
    </Pane>
  </Pane>
);
