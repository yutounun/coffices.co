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
  function isCurrentPath() {
    if (title === "作成" && currentPath === "/cafe/create") {
      return true;
    }
    if (title === "検索" && currentPath === "/cafe/search") {
      return false;
    }
    if (title === "一覧" && currentPath === "/cafe/list") {
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

  function bgColor() {
    return isCurrentPath() ? "transparent" : "rgba(0, 0, 0, 0.05)";
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
          backgroundColor: bgColor(),
        },
      }}
      spacing={1}
    >
      {/* Icon */}
      {children}

      <Typography fontWeight={isCurrentPath() ? "bold" : "normal"}>
        {title}
      </Typography>
    </Stack>
  );
};

export default SidebarRow;
