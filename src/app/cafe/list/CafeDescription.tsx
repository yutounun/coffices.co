import { Stack, Typography } from "@mui/material";
import { CafeI } from "@/types/cafes";
import Stars from "@/components/ui/Stars";
import useTranslate from "@/hooks/useTranslate";

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
  const { t } = useTranslate();

  return (
    <Stack
      sx={{
        m: { xs: "10px", md: "20px" },
      }}
    >
      {/* Cafe Title */}
      <Typography variant="h4" sx={cardTitleStyle}>
        {cafe.title}
      </Typography>

      {/* Review Stars */}
      <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
        {/* No Review */}
        {cafe.rate === 0 && (
          <Typography variant="body1" sx={{ lineHeight: "24px" }}>
            {t?.list.card.noReviews}
          </Typography>
        )}

        {/* Stars */}
        {cafe.rate !== 0 && <Stars rate={cafe.rate} />}
      </Stack>

      {/* Station Name */}
      <Typography variant="body1">{cafe.station}</Typography>
    </Stack>
  );
};

export default CafeDescription;
