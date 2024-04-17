import { Stack } from "@mui/material";
import LoginButton from "./LoginButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const loginPlatformData = {
  google: {
    iconComponent: <GoogleIcon />,
    signInUrl: "google",
    text: "Google",
  },
  facebook: {
    iconComponent: <FacebookIcon />,
    signInUrl: "facebook",
    text: "Facebook",
  },
  github: {
    iconComponent: <GitHubIcon />,
    signInUrl: "github",
    text: "GitHub",
  },
  line: {
    iconComponent: <WhatsAppIcon />,
    signInUrl: "line",
    text: "LINE",
  },
};

export default function LoginButtonGroup() {
  return (
    <Stack
      spacing={4}
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Object.values(loginPlatformData).map((data) => (
        <LoginButton
          key={data.signInUrl}
          text={data.text}
          iconComponent={data.iconComponent}
          signInUrl={data.signInUrl}
        />
      ))}
    </Stack>
  );
}
