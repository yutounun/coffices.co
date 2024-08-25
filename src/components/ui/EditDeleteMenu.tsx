"use client";

import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteCafe } from "@/utils/api";
import { useRouter } from "next/navigation";
import useCafeModalStore from "@/store/openCafeModal";
import Link from "next/link";
import { CafeI } from "@/types/cafes";
import { useTranslations } from "next-intl";

const EditDeleteMenu = ({ cafe }: { cafe: CafeI }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const t = useTranslations("detail");

  const { openCafeModal, setModalType } = useCafeModalStore();

  const handleClose = () => setAnchorEl(null);

  const handleEdit = () => {
    openCafeModal();
    setModalType("edit");
    handleClose();
  };

  const handleDelete = () => {
    deleteCafe(cafe._id);
    handleClose();
    router.push("/cafe/list");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          width: { xs: 24, sm: 40 },
          height: { xs: 24, sm: 40 },
        }}
      >
        <MoreVertIcon
          sx={{
            fontSize: { xs: 20, sm: 24 },
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleEdit}>{t("menu.edit")}</MenuItem>
        <MenuItem onClick={handleDelete}>{t("menu.delete")}</MenuItem>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            cafe.area + " " + cafe.title
          )}`}
          target="_blank"
          rel="noopener"
          onClick={handleClose}
        >
          <MenuItem>{t("menu.find")}</MenuItem>
        </Link>
      </Menu>
    </Box>
  );
};

export default EditDeleteMenu;
