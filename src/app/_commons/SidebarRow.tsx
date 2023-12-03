"use client";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { usePathname, useRouter } from "../../../node_modules/next/navigation";
import CafePostModal from "../cafe/_create/CafePostModal";
interface propTypes {
  row: {
    icon: React.ReactNode;
    title: string;
    path?: string;
  };
  open: boolean;
}
const SidebarRow = ({ row, open }: propTypes) => {
  const currentPath = usePathname();
  const [postCafeModal, setPostCafeModal] = useState(false);
  const router = useRouter();

  /**
   * Determines if the title and path match certain conditions and returns a boolean value.
   *
   * @return {boolean} - true if the title and path match certain conditions, false otherwise.
   */
  function isCurrentPath() {
    if (row.title === "作成" && currentPath === "/cafe/create") {
      return true;
    }
    if (row.title === "検索" && currentPath === "/cafe/search") {
      return false;
    }
    if (row.title === "一覧" && currentPath === "/cafe/list") {
      return true;
    }
    if (row.title === "プロフィール" && currentPath.includes("/profile")) {
      return true;
    }
    if (row.title === "設定" && currentPath === "/config") {
      return true;
    }
    return false;
  }

  function onClickRow() {
    if (row.title === "作成") {
      setPostCafeModal(true);
    } else if (row.path) {
      router.push(row.path);
    }
  }
  return (
    <>
      <ListItem
        key={row.title}
        disablePadding
        sx={{ display: "block" }}
        onClick={onClickRow}
      >
        <ListItemButton
          selected={isCurrentPath()}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {row.icon}
          </ListItemIcon>
          <ListItemText
            primary={row.title}
            sx={{
              opacity: open ? 1 : 0,
            }}
          />
        </ListItemButton>
      </ListItem>
      {postCafeModal && (
        <CafePostModal
          handleModalClose={() => setPostCafeModal(false)}
          showModal={postCafeModal}
        />
      )}
    </>
  );
};

export default SidebarRow;
