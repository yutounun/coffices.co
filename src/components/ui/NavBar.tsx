import React from "react";
import { Typography } from "@mui/material";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import useTranslate from "@/hooks/useTranslate";

const baseMenuStyle = {
  py: 2,
  color: "white",
  display: "block",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  cursor: "pointer",
};

const NavBar = () => {
  const { openCafeModal } = useCafeModalStore();
  const router = useRouter();
  const { t } = useTranslate();

  const onClickListButton = () => {
    router.push("/cafe/list");
  };

  const onClickCreateButton = () => {
    openCafeModal();
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
