import { Typography } from "@mui/material";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const baseMenuStyle = {
  py: { xs: 1, md: 2 },
  color: { xs: "custom.grey", md: "white" },
  display: "block",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  cursor: "pointer",
};

const NavBar = ({ onClose }: { onClose?: () => void }) => {
  const { openCafeModal } = useCafeModalStore();
  const router = useRouter();
  const t = useTranslations("header");

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
        {t("menus.list")}
      </Typography>
      <Typography variant="h5" onClick={onClickCreateButton} sx={baseMenuStyle}>
        {t("menus.post")}
      </Typography>
    </>
  );
};

export default NavBar;
