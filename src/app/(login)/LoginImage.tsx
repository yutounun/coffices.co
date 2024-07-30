import Image from "next/image";
import { Stack } from "@mui/material";

const loginImageStyle = {
  width: "50%",
  height: "100%",
  justifyContent: "center",
};

const LoginImage = () => {
  return (
    <Stack sx={loginImageStyle}>
      <Image
        src="/login/background/background.png"
        alt="bg"
        width={700}
        height={1400}
      />
    </Stack>
  );
};

export default LoginImage;
