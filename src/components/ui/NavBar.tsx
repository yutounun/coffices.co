import { Typography } from "@mui/material";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const onClickListButton = () => {
    const pathLanguage = pathname.split("/")[1]; // get [locale]
    router.push(`/${pathLanguage}/cafe/list`);
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
