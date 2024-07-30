import { Stack } from "@mui/material";
import LoginContent from "./LoginContent";
import LoginImage from "./LoginImage";

export default function Home() {
  const loginStyles = {
    height: "100vh",
    background:
      "radial-gradient(circle at 50% 90%, rgba(255, 227, 194, 1) 0%, rgba(255, 227, 194, 1) 50%, rgba(255, 182, 138, 1) 70%, #FE912D 100%)",
    justifyContent: "center",
    overflow: "hidden",
    px: 25,
  };

  return (
    <Stack direction="row" sx={loginStyles}>
      <LoginContent />
      <LoginImage />
    </Stack>
  );
}
