import Image from "next/image";
import { Stack } from "@mui/material";

const loginImageStyle = {
  py: "5%",
  width: "50%",
  height: "100%",
  justifyContent: "center",
  alignItems: "left", // 追加: 垂直方向の右揃え
  display: "flex", // 追加: 水平方向の揃えを有効にするために必要
};

const LoginImage = () => {
  return (
    <Stack sx={loginImageStyle}>
      <Image
        src="/login/background/background.png"
        alt="bg"
        width={700}
        height={1400}
        style={{ paddingRight: "-20px" }}
      />
    </Stack>
  );
};

export default LoginImage;
