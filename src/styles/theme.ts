import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      text_primary: string;
      text_secondary: string;
      blue_100: string;
      blue_200: string;
      blue_300: string;
      blue_400: string;
      blue_500: string;
    };
  }

  interface ThemeOptions {
    colors?: {
      text_primary: string;
      text_secondary: string;
      blue_100: string;
      blue_200: string;
      blue_300: string;
      blue_400: string;
      blue_500: string;
    };
  }
}

export const COLORS = {
  text_primary: "#023047",
  text_secondary: "#5B7C99",
  blue_100: "#F0F5F8",
  blue_200: "#D1EEEE",
  blue_300: "#05A3A4",
  blue_400: "#006373",
  blue_500: "#023047",
};

const breakpoints = createBreakpoints({});

const theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: ['"Rubik"', "sans-serif"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 40,
      lineHeight: 1.25,
      letterSpacing: "normal",
      fontWeight: 700,
      color: COLORS.text_primary,
      [breakpoints.down("sm")]: {
        fontSize: 26,
      },
    },
    h2: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 24,
      lineHeight: 1.25,
      letterSpacing: "normal",
      fontWeight: 700,
      color: COLORS.text_primary,
      [breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    h3: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 20,
      lineHeight: 1.25,
      letterSpacing: "normal",
      fontWeight: 700,
      color: COLORS.text_primary,
      [breakpoints.down("sm")]: {
        fontSize: 18,
      },
    },
    h4: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 16,
      lineHeight: 1.25,
      letterSpacing: "normal",
      fontWeight: 500,
      color: COLORS.text_primary,
    },
    h5: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 14,
      lineHeight: 1.25,
      letterSpacing: "normal",
      fontWeight: 500,
      color: COLORS.text_primary,
    },
    h6: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 12,
      lineHeight: 1.25,
      letterSpacing: "normal",
      fontWeight: 500,
      color: COLORS.text_primary,
    },
    subtitle1: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.05,
      fontWeight: 400,
      color: COLORS.text_primary,
    },
    subtitle2: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: 0.05,
      fontWeight: 400,
      color: COLORS.text_primary,
    },
    body1: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 16,
      lineHeight: 1.25,
      letterSpacing: 0.05,
      fontWeight: 400,
      color: COLORS.text_primary,
    },
    body2: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 14,
      lineHeight: 1.25,
      letterSpacing: 0.05,
      fontWeight: 400,
      color: COLORS.text_primary,
    },
    caption: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: 12,
      lineHeight: 1.25,
      letterSpacing: 0.05,
      fontWeight: 400,
      color: COLORS.text_primary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            fontSize: 20,
            minHeight: "48px",
            borderRadius: "16px",
          },
        },
        {
          props: { size: "small" },
          style: {
            borderRadius: "12px",
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundImage: `linear-gradient(to right, ${COLORS.blue_400} , ${COLORS.blue_300})`,
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundImage: `linear-gradient(to right, ${COLORS.blue_100} , ${COLORS.blue_100})`,
            color: COLORS.blue_500,
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: COLORS.blue_400,
    },
  },
  colors: COLORS,
});

export default theme;
