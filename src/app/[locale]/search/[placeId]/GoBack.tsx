"use client";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  const router = useRouter();

  return (
    <IconButton
      onClick={() => router.back()}
      sx={{
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}

export default BackButton;
