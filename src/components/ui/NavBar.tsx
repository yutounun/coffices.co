import React from "react";
import { Typography } from "@mui/material";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import useTranslate from "@/hooks/useTranslate";

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

const NavBar = ({ onClose }: { onClose?: () => void }) => {
  const { openCafeModal } = useCafeModalStore();
  const router = useRouter();
  const { t } = useTranslate();

  const onClickListButton = () => {
    router.push("/cafe/list");
    if (onClose) onClose();
  };

  const onClickCreateButton = () => {
    openCafeModal();
    if (onClose) onClose();
  };

  return (
    <>
      <Typography variant="h5" onClick={onClickListButton} sx={baseMenuStyle}>
        {t?.header?.menus.list}
      </Typography>
      <Typography variant="h5" onClick={onClickCreateButton} sx={baseMenuStyle}>
        {t?.header?.menus.post}
      </Typography>
    </>
  );
};

export default NavBar;
