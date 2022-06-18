import { CrossIcon } from "evergreen-ui";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AppButton } from "../button/button";
import { AppText } from "../custom-text/text";
import { HeaderContainer } from "../header/header.style";
import { Divider } from "../player-details-card/player-details-card-style";
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
} from "./custom-dialog.style";

const Modal = ({ show, onClose, children, title, showHeader = true }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          {showHeader && (
            <HeaderContainer>
              <AppText variant="heading">{title}</AppText>
              <span onClick={handleCloseClick}>
                <CrossIcon color="white" />
              </span>
            </HeaderContainer>
          )}
        </StyledModalHeader>
        {/* <Divider /> */}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
