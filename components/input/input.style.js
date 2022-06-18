import { TextInputField } from "evergreen-ui";
import styled from "styled-components";

export const AppInput = styled(TextInputField)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.neutral.bg2 : theme.neutral.bg1} !important;
  color: ${({ theme, disabled }) =>
    disabled ? theme.text.disabled : theme.text.heading};
  width: 248px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  border: ${({ borderless }) => (borderless ? `none` : `1px solid #494949`)};
  &:focus {
    border: ${({ borderless }) =>
      borderless ? `none` : `1px solid #494949`} !important;
  }
  ${(props) => props.width && `width: ${props.width}`}
`;
