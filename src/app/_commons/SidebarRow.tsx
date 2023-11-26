"use client";
import React from "react";
import { Stack, Typography } from "../../../node_modules/@mui/material/index";
import { usePathname } from "../../../node_modules/next/navigation";

interface propTypes {
  children: React.ReactNode;
  title: string;
}
const SidebarRow = ({ children, title }: propTypes) => {
  const currentPath = usePathname();

  /**
   * Determines if the title and path match certain conditions and returns a boolean value.
   *
   * @return {boolean} - true if the title and path match certain conditions, false otherwise.
   */
  function isBold() {
    if (title === "作成" && currentPath === "/shops/create") {
      return true;
    }
    if (title === "検索" && currentPath === "/shops/search") {
      return false;
    }
    if (title === "一覧" && currentPath === "/shops/list") {
      return true;
    }
    if (title === "プロフィール" && currentPath === "/profile") {
      return true;
    }
    if (title === "設定" && currentPath === "/config") {
      return true;
    }
    return false;
  }
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        cursor: "pointer",
        ":hover": {
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
      }}
      spacing={1}
    >
      {/* Icon */}
      {children}

      <Typography fontWeight={isBold() ? "bold" : "normal"}>{title}</Typography>
    </Stack>
  );
};

export default SidebarRow;
