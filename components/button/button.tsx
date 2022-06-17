import react from "react";
import { Button } from "evergreen-ui";
import styled from "styled-components";

const defaultBtnStyles = (theme) => `
  border-width: 0;
  border-radius: 8px;
`;

const primary = (theme, disabled) => `
  border-width: 0;
  border-radius: 8px;
  background-color:${disabled ? theme.neutral.bg2 : theme.ui.primary};
   color: ${theme.text.heading};
   &:hover {
    background-color: ${
      disabled ? theme.neutral.bg2 : theme.ui.secondary
    } !important;
    border-width: 0 !important;
  }
`;

const secondary = (theme, disabled) => `
  border: 1px solid #494949;
  border-radius: 8px;
  background-color: transparent;
   color:  ${disabled ? theme.text.mute : theme.text.normal};
   &:hover {
    background-color: transparent !important;
    color: ${disabled ? theme.text.mute : theme.text.heading};
  }
`;

const error = `border: 1px solid red`;
interface variantsProps {
  primary: (theme: any, disabled: any) => string;
  secondary: (theme: any, disabled: any) => string;
}
const variants: variantsProps = {
  primary,
  secondary,
};

export const AppButton = styled(Button)<{ isError: boolean }>`
  width: ${({ smallBtn }) => (smallBtn ? `44px` : `105px`)};
  height: 44px;
  font-weight: ${({ smallBtn }) => (smallBtn ? `900` : `500`)};
  font-size: ${({ smallBtn }) => (smallBtn ? `16px` : `14px`)};
  line-height: 21px;
  ${({ theme }) => defaultBtnStyles(theme)}
  ${({ variant, theme, disabled }) => variants[variant](theme, disabled)}
  ${(props) => props.isError && error}
`;
