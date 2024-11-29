"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      sx={{
        position: "absolute",
        borderRadius: "5%",
        top: "10px",
        left: "10px",
        zIndex: 10,
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" },
      }}
    >
      <ArrowBackIcon />
      Back
    </Button>
  );
}

export default BackButton;
