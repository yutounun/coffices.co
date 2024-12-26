"use client";
import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

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
      main?: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    displayLg: React.CSSProperties;
    displaySm: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayLg?: React.CSSProperties;
    displaySm?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displayLg: true;
    displaySm: true;
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
      main: "#838F55",
      light: "#AAB77E",
      dark: "#606B40",
      contrastText: "#fff",
      200: "#C7D5A2",
      300: "#97A366",
      500: "#838F55",
      700: "#5A633A",
      800: "#3F4728",
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
      100: "#F9FAFB",
      200: "#F3F4F6",
      300: "#E5E7EB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },

    gradient: {
      main: "linear-gradient(90deg, #A5D6A7 0%, #4CAF50 100%)",
    },
  },
  typography: {
    displayLg: {
      fontFamily: "Lato",
      fontSize: "2.5rem",
      fontWeight: 300,
      color: "#1F2937",
      lineHeight: 0.8,
    },
    displaySm: {
      fontFamily: "Lato",
      fontSize: "1.2rem",
      fontWeight: "normal",
      color: "#1F2937",
      lineHeight: 1,
    },
    h1: {
      fontFamily: "Lato",
      fontSize: "2.5rem",
      fontWeight: "normal",
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
      lineHeight: 1,
    },
    h2: {
      fontFamily: "Lato",
      fontSize: "1.6rem",
      fontWeight: 300,
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "1.4rem",
      fontWeight: 300,
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h4: {
      fontFamily: "Lato",
      fontSize: "1.1rem",
      fontWeight: "normal",
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "1.0rem",
      },
    },
    h5: {
      fontFamily: "Lato",
      fontSize: "1rem",
      fontWeight: "regurar",
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    subtitle1: {
      fontFamily: "Lato",
      fontSize: "0.9rem",
      fontWeight: "bold",
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    subtitle2: {
      fontFamily: "Lato",
      fontSize: "0.8rem",
      fontWeight: "bold",
      color: "#1F2937",
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    caption: {
      fontFamily: "Latos",
      fontSize: "0.5rem",
      lineHeight: 1.5,
      color: "rgb(0,0,0,62%)",
      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
    body1: {
      fontFamily: "Latos",
      fontSize: "0.9rem",
      lineHeight: 1.63,
      color: "rgb(0,0,0,62%)",
    },
    body2: {
      fontFamily: "Latos",
      fontSize: "0.7rem",
      lineHeight: 1.63,
      color: "rgb(0,0,0,62%)",
      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
    button: {
      fontFamily: "Latos",
      fontSize: "0.9rem",
      fontWeight: "normal",
      lineHeight: 1.63,
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
