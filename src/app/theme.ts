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

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FBFBFB",
      light: "white",
      dark: "#EFECEC",
      contrastText: "#1D1915",
    },
    secondary: {
      main: "#FF8F2A",
      light: "#FCF4ED",
      dark: "#DC7C25",
      contrastText: "#25313C",
    },
    error: {
      main: "#FF8F2A",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFBB00",
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
    custom: {
      white: "#FFFFFF",
      hoveredWhite: "#EFECEC",
      lightGray: "#F8F8F8",
      gray: "#D2D2D2",
      darkGray: "#585858",
      black: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Lato, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "2.5rem", // 48px
      fontWeight: "extraBold",
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
      lineHeight: 1,
    },
    h2: {
      fontFamily: "Lato, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "2rem", // 32px
      fontWeight: 500,
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontFamily: "Lato, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1.5rem", // 24px
      fontWeight: "regurar",
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h4: {
      fontFamily: "Lato, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1.1rem", // 16px
      fontWeight: "regurar",
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.0rem",
      },
    },
    h5: {
      fontFamily: "Lato, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.9rem", // 14px
      fontWeight: "regurar",
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    caption: {
      fontFamily: "Open Sans, Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.5rem", // 10px
      lineHeight: 1.5, // 150.6%
      color: "rgb(0,0,0,62%)",
      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
    body1: {
      fontFamily: "Open Sans, Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.9rem", // 16px
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    body2: {
      fontFamily: "Open Sans, Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.5rem", // 16px
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
    button: {
      fontFamily: "Open Sans, Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1rem", // 18px
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
    },
  },
});

export default theme;
