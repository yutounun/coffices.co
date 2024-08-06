import { Button, Typography, IconButton, Avatar } from "@mui/material";
import { signOut } from "next-auth/react";
import useTranslate from "@/hooks/useTranslate";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const UserActions = ({}) => {
  const { t } = useTranslate();
  const router = useRouter();
  const { data: session } = useSession();

  const handleOpenProfile = () => {
    router.push("/profile");
  };

  const onClickLogoutButton = () => {
    signOut({ callbackUrl: "/" });
  };
  const baseMenuStyle = {
    py: { xs: 1, md: 2 },
    color: { xs: "custom.grey", md: "custom.white" },
    display: "block",
    fontWeight: 700,
    letterSpacing: ".3rem",
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      color: "custom.white",
      textDecoration: "none",
      opacity: 0.5,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "10px",
      width: "100%",
      height: "2px",
      backgroundColor: "custom.white",
      transform: "scaleX(0)",
      transformOrigin: "bottom left",
      transition: "transform 0.3s ease",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  };

  return (
    <>
      <Button
        onClick={onClickLogoutButton}
        sx={{
          my: 2,
          color: "white",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography sx={{ ...baseMenuStyle, letterSpacing: "0.1rem" }}>
          {t?.header?.menus.signout}
        </Typography>
      </Button>
      <IconButton onClick={handleOpenProfile} sx={{ p: 0 }}>
        <Avatar
          alt="User Avatar"
          src={session?.user?.image || "/coffee.jpg"}
          sx={{ width: { xs: 28, md: 38 }, height: { xs: 28, md: 38 } }}
        />
      </IconButton>
    </>
  );
};

export default UserActions;
