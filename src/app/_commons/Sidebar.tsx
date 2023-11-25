import React from "react";
import {
  Box,
  Stack,
  Typography,
} from "../../../node_modules/@mui/material/index";
import AddCircleOutlineIcon from "../../../node_modules/@mui/icons-material/AddCircleOutline";
import SearchIcon from "../../../node_modules/@mui/icons-material/Search";
import LibraryBooksIcon from "../../../node_modules/@mui/icons-material/LibraryBooks";
import SettingsIcon from "../../../node_modules/@mui/icons-material/Settings";
import AccountBoxIcon from "../../../node_modules/@mui/icons-material/AccountBox";
import SidebarRow from "./SidebarRow";
import Image from "../../../node_modules/next/image";

interface propTypes {
  selectedTabTitle: "list" | "search" | "create" | "profile" | "config";
}

const Sidebar = ({ selectedTabTitle }: propTypes) => {
  const rowProps = [
    {
      children: <LibraryBooksIcon />,
      title: "一覧",
    },
    {
      children: <SearchIcon />,
      title: "検索",
    },
    {
      children: <AddCircleOutlineIcon />,
      title: "作成",
    },
    {
      children: <AccountBoxIcon />,
      title: "プロフィール",
    },
    {
      children: <SettingsIcon />,
      title: "設定",
    },
  ];
  return (
    <Stack
      spacing={6}
      sx={{
        position: "fixed",
        left: 0,
        width: "15%",
        py: 8,
        px: 3,
        height: "100%",
        borderRight: "solid 1px",
      }}
    >
      <Image src="/logo.png" alt="logo" width={200} height={80} />

      <Stack>
        {rowProps.map((row) => (
          <SidebarRow key={row.title} title={row.title}>
            {row.children}
          </SidebarRow>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
