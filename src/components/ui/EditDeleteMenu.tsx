"use client";

import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteCafe } from "@/utils/api";
import { useRouter } from "next/navigation";
import useCafeModalStore from "@/store/openCafeModal";

const EditDeleteMenu = ({ cafeId }: { cafeId: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const { openCafeModal, setModalType } = useCafeModalStore();

  const handleClose = () => setAnchorEl(null);

  const handleEdit = () => {
    openCafeModal();
    setModalType("edit");
    handleClose();
  };

  const handleDelete = () => {
    deleteCafe(cafeId);
    handleClose();
    router.push("/cafe/list");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
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
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default EditDeleteMenu;
