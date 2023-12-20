"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6B4E31",
      light: "#9E8B7D",
      dark: "#513C2C",
      contrastText: "white",
    },
    // accent color
    secondary: {
      main: "#C06014",
    },
    mode: "light", // Sets the theme to light mode
  },
});

export default theme;
