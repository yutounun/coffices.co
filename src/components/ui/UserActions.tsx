import {
  Button,
  Typography,
  IconButton,
  Avatar,
  Stack,
  Box,
} from "@mui/material";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const UserActions = ({}) => {
  const t = useTranslations("header");
  const router = useRouter();
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleOpenProfile = () => {
    const pathLanguage = pathname.split("/")[1]; // get [locale]
    router.push(`/${pathLanguage}/profile`);
  };

  const onClickLogoutButton = () => {
    signOut({ callbackUrl: "/" });
  };
  const baseMenuStyle = {
    my: 2,
    color: "white",
    display: "block",
    fontWeight: 700,
    letterSpacing: ".3rem",
    textDecoration: "none",
  };

  return (
    <Stack direction="row" sx={{ alignItems: "center", height: 20 }} gap={2}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <LanguageToggle />
      </Box>
      <Button
        onClick={onClickLogoutButton}
        sx={{
          my: 2,
          color: "white",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography sx={{ ...baseMenuStyle, letterSpacing: "0.1rem" }}>
          {t("menus.signout")}
        </Typography>
      </Button>
      <IconButton onClick={handleOpenProfile} sx={{ p: 0 }}>
        <Avatar
          alt="User Avatar"
          src={session?.user?.image || "/coffee.jpg"}
          sx={{ width: { xs: 28, md: 38 }, height: { xs: 28, md: 38 } }}
        />
      </IconButton>
    </Stack>
  );
};

export default UserActions;
