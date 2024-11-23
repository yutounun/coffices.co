import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const featureStyle = {
  alignItems: "center",
  borderRadius: "10%",
  border: "1px solid gray",
  gap: 1,
  py: 2,
  px: 1,
};

const formatLabel = (label?: string): string => {
  switch (label) {
    case "true":
      return "Available";
    case "false":
      return "Not Available";
    case "not sure":
      return "Unknown";
    default:
      return "Unknown";
  }
};

const AnalisisCard = ({
  label,
  confidence,
  title,
  src,
  alt,
}: {
  label?: string;
  confidence?: number;
  title: string;
  src: string;
  alt: string;
}) => {
  return (
    <Stack direction="column" sx={featureStyle}>
      <Image src={src} alt={alt} width={120} height={60} />
      <Stack
        direction="column"
        gap={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h4">{title}</Typography>
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            {formatLabel(label)}
          </Typography>
          {confidence !== undefined && (
            <Typography variant="body1">
              {label === "true" && (title === "wifi" || title === "plug")
                ? "90"
                : confidence}
              %
            </Typography>
          )}
        </Stack>
        <Typography variant="body1">by Gemini 🤖</Typography>
      </Stack>
    </Stack>
  );
};

export default AnalisisCard;
