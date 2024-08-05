import { Stack } from "@mui/material";
import LoginContent from "./LoginContent";
import LoginImage from "./LoginImage";
import { mobile, desktop } from "@/utils/const";

export default function Home() {
  const loginStyles = {
    height: "100vh",
    background: "white",
    justifyContent: "center",
    overflow: "hidden",
    px: { xs: mobile.space.around, md: 10 },
  };

  return (
    <Stack direction="row" sx={loginStyles}>
      <LoginContent />
      <LoginImage />
    </Stack>
  );
}
