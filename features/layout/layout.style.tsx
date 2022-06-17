import { Pane } from "evergreen-ui";
import styled from "styled-components";

export const LayoutWrap = styled(Pane)`
  display: flex;
  background-color: ${({ theme }: any) => theme.neutral.bg2};
`;

export const SideBar = styled(Pane)`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 60px;
  background-color: #111111;
  height: 100vh;
  .logo {
    border: 1.725px solid ${({ theme }: any) => theme.ui.primary};
    border-radius: 50%;
    margin: 18px 15px 0 15px;
    background-color: "white";
  }
`;
