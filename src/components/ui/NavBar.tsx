import React from "react";
import { Typography } from "@mui/material";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import useTranslate from "@/hooks/useTranslate";

const baseMenuStyle = {
  py: { xs: 1, md: 2 },
  color: { xs: "custom.grey", md: "white" },
  display: "block",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "#ffffff",
    textDecoration: "underline",
    textDecorationThickness: "4px",
    textDecorationColor: "#ffffff",
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
