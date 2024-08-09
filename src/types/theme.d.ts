interface CustomPalette {
  custom: {
    white: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
