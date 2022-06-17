export interface playerProps {
  Appearances: number;
  Assists: number;
  "Clean Sheets": number;
  "Flag Image": string;
  "Goals ": number;
  Height: string;
  "Jersey Number": number;
  "Minutes Played": string;
  Nationality: string;
  "Player Image": string;
  "Player Name": string;
  Position: string;
  Saves: string;
  Starter: string | boolean;
  Weight: number;
}

export interface themeProps {
  theme: {
    ui: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      heading: string;
      normal: string;
      mute: string;
      disabled: string;
    };
    neutral: {
      bg1: string;
      bg2: string;
    };
    fontSizes: [
      "12px", // 0
      "14px", // 1
      "16px", // 2
      "18px", // 3
      "20px", // 4
      "22px", // 5
      "24px" // 6
    ];
    fontWeights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      heading: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      code: number;
    };
  };
}
