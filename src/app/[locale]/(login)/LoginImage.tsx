import Image from "next/image";
import { Stack } from "@mui/material";

const loginImageStyle = {
  width: "50%",
  height: "95vh",
  my: "auto",
  justifyContent: "center",
  display: { xs: "none", md: "inline" },
  position: "relative", // 必須: 親要素を相対位置に設定
};

const LoginImage = () => {
  return (
    <Stack sx={loginImageStyle}>
      <Image
        src="/login/background/man.jpg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: 15 }}
        priority
      />
    </Stack>
  );
};

export default LoginImage;
