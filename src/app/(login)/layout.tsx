import LanguageToggle from "@/components/ui/LanguageToggle";
import { Stack } from "@mui/material";
import Image from "next/image";

const loginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <LanguageToggle sx={{ position: "fixed" }} /> */}
      <Stack
        sx={{
          position: "fixed",
          top: "2em",
          left: "4em",
          backgroundColor: "primary.main",
          gap: 5,
        }}
        direction="row"
      >
        <Image src={"/logo/orange.png"} alt="image" height="40" width="100" />
        <LanguageToggle />
      </Stack>
      {children}
    </>
  );
};

export default loginLayout;
