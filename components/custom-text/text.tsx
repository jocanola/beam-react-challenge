import { Text } from "evergreen-ui";
import styled from "styled-components";

const heading = (theme, brand) => `
color: ${brand ? theme.ui.primary : theme.text.heading};
font-weight:${theme.fontWeights.semibold};
font-size:${theme.fontSizes[3]};
line-height: 24px;
`;

const normal = (theme, brand) => `
color: ${brand ? theme.ui.primary : theme.text.normal};
font-weight:${theme.fontWeights.medium};
font-size:${theme.fontSizes[1]};
`;

const mute = (theme, brand) => `
color: ${brand ? theme.ui.primary : theme.text.mute};
font-weight:${theme.fontWeights.normal};
font-size:${theme.fontSizes[1]};
`;

const variants = {
  normal,
  mute,
  heading,
};

export const AppText = styled(Text)`
  line-height: 21px;
  ${({ variant, theme, brand }) => variants[variant](theme, brand)};
  ${({ fontSize }: { fontSize?: string }) =>
    fontSize ? `font-size: ${fontSize}` : null}
`;
