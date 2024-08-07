import React from "react";
import { Typography } from "@mui/material";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter, usePathname } from "next/navigation";
import useTranslate from "@/hooks/useTranslate";

const baseMenuStyle = {
  py: { xs: 1, md: 1 },
  color: { xs: "custom.grey", md: "white" },
  display: "block",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  cursor: "pointer",
  borderBottom: "none",
  "&:hover": {
    color: "#E7E7E7",
    textDecoration: "none",
    borderBottom: "none",
  },
};

const activeMenuStyle = {
  ...baseMenuStyle,
  borderBottom: "solid 2px #fff",
  paddingBottom: "0.5px",
  py: { xs: 1, md: 1 },
};

const NavBar = ({ onClose }: { onClose?: () => void }) => {
  const { openCafeModal } = useCafeModalStore();
  const router = useRouter();
  const { t } = useTranslate();
  const pathname = usePathname();

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
      <Typography
        variant="h5"
        onClick={onClickListButton}
        sx={pathname === "/cafe/list" ? activeMenuStyle : baseMenuStyle}
      >
        {t?.header?.menus.list}
      </Typography>
      <Typography
        variant="h5"
        onClick={onClickCreateButton}
        sx={pathname === "/cafe/create" ? activeMenuStyle : baseMenuStyle}
      >
        {t?.header?.menus.post}
      </Typography>
    </>
  );
};

export default NavBar;
