const colors = {
  ui: {
    primary: "#fea013",
    secondary: "#BA4A0C",
    tertiary: "#D23131",
  },
  text: {
    heading: "#F8F8F8",
    normal: "#CBCBCB",
    mute: "#999999",
    disabled: "#707070",
  },
  neutral: {
    bg1: "#222222",
    bg2: "#2D2D2D",
  },
};

const typography = {
  fontSizes: [
    "12px", // 0
    "14px", // 1
    "16px", // 2
    "18px", // 3
    "20px", // 4
    "22px", // 5
    "24px", // 6
  ],
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
};

export const appTheme = { ...colors, ...typography };
