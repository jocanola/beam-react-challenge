import styled from "styled-components";

export const StyledModalBody = styled.div``;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  background: ${({ theme }) => theme.neutral.bg1};
  border-radius: 8px;
  padding: 24px;
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
`;
