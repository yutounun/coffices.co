import React from "react";
import { Typography } from "@mui/material";
import useCreateModalStore from "@/store/openCreateCafeModal";
import { useRouter } from "next/navigation";
import useTranslate from "@/hooks/useTranslate";

const baseMenuStyle = {
  my: 2,
  mx: 3,
  color: "black",
  display: "block",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
};

const NavBar = () => {
  const { openCreateCafeModal } = useCreateModalStore();
  const router = useRouter();
  const { t } = useTranslate();

  const onClickListButton = () => {
    router.push("/cafe/list");
  };

  const onClickCreateButton = () => {
    openCreateCafeModal();
  };

  return (
    <>
      <Typography variant="h4" onClick={onClickListButton} sx={baseMenuStyle}>
        {t?.header?.menus.list}
      </Typography>
      <Typography variant="h4" onClick={onClickCreateButton} sx={baseMenuStyle}>
        {t?.header?.menus.post}
      </Typography>
    </>
  );
};

export default NavBar;
