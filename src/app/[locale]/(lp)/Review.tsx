import Stars from "@/components/ui/Stars";
import { Stack, Typography } from "@mui/material";

const Review = ({
  comment,
  name,
  rate,
}: {
  comment: string;
  name: string;
  rate: number;
}) => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        px: 10,
        py: 5,
        gap: 2,
      }}
    >
      <Typography variant="h3">{comment}</Typography>
      <Stack direction="row" sx={{ gap: 2 }}>
        <Stack direction="row">
          <Stars size={{ xs: "small", md: "large" }} rate={rate} />
        </Stack>
        <Typography variant="h5">{name}</Typography>
      </Stack>
    </Stack>
  );
};

export default Review;
