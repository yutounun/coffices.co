"use client";

import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteCafe } from "@/utils/api";
import { useRouter } from "next/navigation";
import useCafeModalStore from "@/store/openCafeModal";

const EditDeleteMenu = ({ cafeId }: { cafeId: string }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const { openCafeModal } = useCafeModalStore();

  const handleClose = () => setShowMenu(false);

  const handleEdit = () => {
    openCafeModal();
    console.log("Edit clicked");
    handleClose();
  };

  const handleDelete = () => {
    deleteCafe(cafeId);
    handleClose();
    router.push("/cafe/list");
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={() => setShowMenu(true)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={showMenu}
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
    </div>
  );
};

export default EditDeleteMenu;
