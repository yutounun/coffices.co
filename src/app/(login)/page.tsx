"use client";
import { Stack, Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import useTranslate from "@/hooks/useTranslate";
import useLangStore from "@/store/lang";
import { useEffect } from "react";
import Image from "next/image";
import { loginProviders } from "@/data/buttons";

export default function Home() {
  const { t } = useTranslate();
  const { changeToJp } = useLangStore();

  useEffect(() => {
    changeToJp();
  }, [changeToJp]);

  const stackStyles = {
    main: {
      height: "100vh",
      background:
        "radial-gradient(circle at 50% 90%, rgba(255, 227, 194, 1) 0%, rgba(255, 227, 194, 1) 50%, rgba(255, 182, 138, 1) 70%, #FE912D 100%)",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    left: {
      py: "5%",
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    right: {
      py: "5%",
      width: "50%",
      height: "100%",
      justifyContent: "center",
    },
    loginButtons: {
      my: 8,
      width: "50%",
    },
  };

  return (
    <Stack direction="row" sx={stackStyles.main}>
      <Stack sx={stackStyles.left}>
        <Typography variant="h1">{t?.home.title}</Typography>
        <Typography variant="body1" sx={{}}>
          {t?.home.subtitle}
        </Typography>

        {/* Login Buttons */}
        <Stack spacing={3} sx={stackStyles.loginButtons}>
          {loginProviders.map((provider) => (
            <LoginButton
              key={provider.text}
              text={provider.text}
              iconUrl={provider.iconUrl}
              signInUrl={provider.signInUrl}
            />
          ))}
        </Stack>
      </Stack>

      <Stack sx={stackStyles.right}>
        <Image
          src="/login/background/background.png"
          alt="bg"
          width={600}
          height={1400}
        />
      </Stack>
    </Stack>
  );
}
