"use client";
import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

// 型定義の拡張
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    neutral?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    gradient?: {
      1?: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    nav: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    nav?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    nav: true;
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
      200: "#D4EBD5",
      300: "#A5D6A7",
      500: "#4CAF50",
      700: "#278A2B",
      800: "#0F4E12",
    },
    secondary: {
      main: "#161422",
      light: "#FCF4ED",
      dark: "#DC7C25",
      contrastText: "#25313C",
      200: "#F4E9FF",
      300: "#D1ACF4",
      500: "#B268F8",
      700: "#8039C4",
      800: "#521B86",
    },
    neutral: {
      100: "#F8F8F8",
      200: "#EFECEC",
      300: "#D2D2D2",
      400: "#585858",
      500: "#25313C",
      600: "#1D1915",
      700: "#000000",
      800: "#FFFFFF",
      900: "#000000",
    },
    gradient: {
      main: "linear-gradient(90deg, #A5D6A7 0%, #4CAF50 100%)",
    },
  },
  typography: {
    displayLg: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "2.5rem", // 48px
      fontWeight: 300,
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
      lineHeight: 0.8,
    },
    displaySm: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1rem", // 32px
      fontWeight: "regular",
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      lineHeight: 1,
    },
    h1: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "2.5rem", // 48px
      fontWeight: "normal",
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
      lineHeight: 1,
    },
    h2: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1.6rem", // 32px
      fontWeight: 300,
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1.4rem", // 24px
      fontWeight: 300,
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h4: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1.1rem", // 16px
      fontWeight: "normal",
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "1.0rem",
      },
    },
    h5: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "1rem", // 14px
      fontWeight: "regurar",
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    subtitle1: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.9rem", // 16px
      fontWeight: "bold",
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    subtitle2: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.8rem", // 14px
      fontWeight: "bold",
      color: "neutral.900",
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    nav: {
      fontFamily: "Roboto, 'Open Sans', Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.8rem",
      fontWeight: "bold",
      color: "neutral.900",
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
      fontSize: "0.7rem", // 16px
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
    button: {
      fontFamily: "Open Sans, Roboto, 'Helvetica', Arial, sans-serif",
      fontSize: "0.9rem", // 18px
      fontWeight: "normal",
      lineHeight: 1.63, // 163.2%
      color: "rgb(0,0,0,62%)",
      textTransform: "none",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-sizeSmall": {
            height: "10px",
          },
        },
      },
    },
  },
});

export default theme;
