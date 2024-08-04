import { Stack, Typography } from "@mui/material";
import { CafeI } from "@/types/cafes";
import Stars from "@/components/ui/Stars";
import Image from "next/image";

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
  return (
    <Stack
      sx={{
        mx: { xs: "10px", md: "20px" },
        justifyContent: "center",
        height: "120px",
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
          <Stars size={{ sm: "small", md: "large" }} rate={cafe.rate} />
        )}
        {/* Stars */}
        {cafe.rate !== 0 && (
          <Stars size={{ sm: "small", md: "large" }} rate={cafe.rate} />
        )}

        {/* Review Score */}
        <Typography>{cafe.rate}</Typography>
      </Stack>

      {/* Station Name */}
      <Typography variant="body1">{cafe.station}</Typography>

      {/* Icons */}
      <Stack direction="row" sx={{ gap: 1, mt: 0.4, ml: 0.1 }}>
        {cafe.isWifi && (
          <Image src="/card/wifi.svg" alt="wifi" height="17" width="17" />
        )}
        {cafe.isOutlet && (
          <Image src="/card/outlet.svg" alt="wifi" height="17" width="17" />
        )}
        {cafe.isSmoking && (
          <Image src="/card/cigarette.svg" alt="wifi" height="17" width="17" />
        )}
      </Stack>
    </Stack>
  );
};

export default CafeDescription;
