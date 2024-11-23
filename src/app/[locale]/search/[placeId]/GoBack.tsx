"use client";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";

function BackButton() {
  const router = useRouter();
  const [isClickable, setIsClickable] = useState(false);

  // Right after the client component is rendered,
  // provide the button with the event listener to avoid the hydration error
  useEffect(() => {
    setIsClickable(true);
  }, []);

  return (
    <IconButton
      onClick={isClickable ? () => router.back() : undefined}
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
