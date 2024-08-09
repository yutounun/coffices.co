<<<<<<< HEAD
import "@mui/material/styles";

=======
>>>>>>> b7bc64295ff88934c8fbc0ac38d484faf3cc5701
interface CustomPalette {
  custom: {
    white: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
