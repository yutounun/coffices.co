"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Sets the theme to light mode
    primary: {
      main: "#FFD8B5",
      light: "#FF8F2A",
      dark: "#FF8F2A",
      contrastText: "#25313C",
    },
    secondary: {
      dark: "#FF8F2A",
      main: "#FFD8B5",
      light: "#FF8F2A",
    },
    error: {
      main: "#FF8F2A",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFD8B5",
      contrastText: "#25313C",
    },
    info: {
      main: "#DAE3EA",
      contrastText: "#25313C",
    },
    success: {
      main: "#D2D2D2",
      contrastText: "#25313C",
    },
  },

  typography: {
    h1: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "3rem", // 48px
    },
    h2: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "2rem", // 32px
    },
    h3: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1.5rem", // 24px
    },
    h4: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1rem", // 16px
    },
    caption: {
      fontFamily:
        "Open Sans, Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "0.625rem", // 10px
      lineHeight: 1.5, // 150.6%
    },
    body1: {
      fontFamily:
        "Open Sans, Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1.125rem", // 18px
      lineHeight: 1.63, // 163.2%
    },
    button: {
      fontFamily:
        "Open Sans, Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1.125rem", // 18px
      lineHeight: 1.63, // 163.2%
    },
  },
});

export default theme;
