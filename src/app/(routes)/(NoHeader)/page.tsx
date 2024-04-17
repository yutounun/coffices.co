import { Stack } from "@mui/material";
import UndrawBarista from "../../../../public/undraw_barista.svg";
import UndrawDigitalNomad from "../../../../public/undraw_digital_nomad.svg";
import Image from "next/image";
import Title from "./Title";

const rightImgStyle = {
  justifyContent: "center",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const loginWrapperStyle = {
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#F7F1E5",
};
const leftImgStyle = {
  justifyContent: "center",
  "@media (max-width: 600px)": {
    display: "none",
  },
};

export default function Home() {
  return (
    <>
      <Stack direction="row" sx={loginWrapperStyle}>
        <Stack sx={leftImgStyle}>
          <Image src={UndrawBarista} alt={""} width={300} height={300} />
        </Stack>
        <Title />
        <Stack sx={rightImgStyle}>
          <Image src={UndrawDigitalNomad} alt={""} width={400} height={400} />
        </Stack>
      </Stack>
    </>
  );
}
