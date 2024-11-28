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

const formatLabel = (label?: any): string => {
  switch (label) {
    case true:
      return "Available";
    case false:
      return "Not Sure";
    case "not sure":
      return "Unknown";
    default: // coffee price
      return `${label}`;
  }
};

const formatLabelForWork = (label?: any) => {
  console.log("label", label);
  switch (label) {
    case true:
      return "Good";
    case false:
      return "Not Sure";
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
  console.log("title", title);
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
            {title === "work friendly"
              ? formatLabelForWork(label)
              : formatLabel(label)}
          </Typography>

          {confidence !== undefined && (
            <Typography variant="body1">
              {label && (title === "wifi" || title === "plug")
                ? "90"
                : confidence}
              %
            </Typography>
          )}
        </Stack>
        {/* <Typography variant="body1">by Gemini 🤖</Typography> */}
      </Stack>
    </Stack>
  );
};

export default AnalisisCard;
