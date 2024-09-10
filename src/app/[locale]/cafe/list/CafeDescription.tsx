import { Stack, Typography } from "@mui/material";
import { CafeI } from "@/types/cafes";
import Stars from "@/components/ui/Stars";
import CardIcons from "./CardIcons";
import { usePathname } from "next/navigation";
import stationsArea from "@/data/stationsArea.json";

interface PropTypes {
  cafe: CafeI;
}

const cardTitleStyle = {
  fontWeight: { xs: "bold", md: "semibold" },
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  lineHeight: "20px",
};

const CafeDescription = ({ cafe }: PropTypes) => {
  const pathname = usePathname();
  const pathLanguage = pathname.split("/")[1];

  const translatedStation = () => {
    return pathLanguage === "en"
      ? stationsArea.find((station) => cafe.station === station.ja)?.en
      : stationsArea.find((station) => cafe.station === station.ja)?.ja;
  };

  return (
    <Stack
      sx={{
        mx: { xs: "10px", md: "20px" },
        justifyContent: "center",
        height: { xs: "auto", md: "120px" },
        my: { xs: 1, md: 0 },
      }}
    >
      {/* Cafe Title */}
      <Typography variant="h4" sx={cardTitleStyle}>
        {cafe.title}
      </Typography>

      {/* Review Stars */}
      <Stack direction="row" sx={{ alignItems: "center", gap: 0.5 }}>
        {/* No Review */}
        {cafe.rate === 0 && (
          <Stars size={{ xs: "small", md: "large" }} rate={cafe.rate} />
        )}
        {/* Stars */}
        {cafe.rate !== 0 && (
          <Stars size={{ xs: "small", md: "large" }} rate={cafe.rate} />
        )}

        {/* Review Score */}
        <Typography>{cafe.rate}</Typography>
      </Stack>

      {/* Station Name */}
      <Typography variant="body1">{translatedStation()}</Typography>

      {/* Icons */}
      <CardIcons cafe={cafe} />
    </Stack>
  );
};

export default CafeDescription;
