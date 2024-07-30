"use client";
import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

// 型定義の拡張
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    custom?: {
      white?: string;
      hoveredWhite?: string;
      lightGray?: string;
      gray?: string;
      darkGray?: string;
      black?: string;
    };
  }
}

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
    // カスタムカラー変数
    custom: {
      white: "#FFFFFF",
      hoveredWhite: "#EFECEC",
      lightGray: "#F8F8F8",
      gray: "#D2D2D2",
      darkGray: "#A9A9A9",
      black: "#000000",
    },
  },

  typography: {
    h1: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "3rem", // 48px
      fontWeight: "extraBold",
      color: "black",
      lineHeight: 1,
    },
    h2: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "2rem", // 32px
      fontWeight: "regurar",
      color: "black",
    },
    h3: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1.5rem", // 24px
      fontWeight: "regurar",
      color: "black",
    },
    h4: {
      fontFamily:
        "Lato, 'Open Sans', Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1rem", // 16px
      fontWeight: "regurar",
      color: "black",
    },
    caption: {
      fontFamily:
        "Open Sans, Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "0.625rem", // 10px
      lineHeight: 1.5, // 150.6%
      color: "rgb(0,0,0,62%)",
    },
    body1: {
      fontFamily:
        "Open Sans, Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1rem", // 16px
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
    },
    button: {
      fontFamily:
        "Open Sans, Roboto, 'Noto Sans JP', 'Helvetica', Arial, sans-serif",
      fontSize: "1.125rem", // 18px
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
    },
  },
});

export default theme;
