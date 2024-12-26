import { CafeAnalysisI } from "@/types/CafeAnalysis";
import { Stack, Typography } from "@mui/material";
import UsedReview from "./UsedReview";

const UsedReviews = ({ detailInfo }: { detailInfo?: CafeAnalysisI }) => {
  return (
    <Stack direction="column" gap={2} sx={{ pt: 2, pb: 6 }}>
      <Typography variant="h2">
        Reviews used by AI ({detailInfo?.important_reviews.length})
      </Typography>
      <Stack
        direction="row"
        gap={3}
        sx={{
          overflowX: "auto",
          px: 1,
          py: 1,
        }}
      >
        {detailInfo?.important_reviews.map((review, index) => (
          <UsedReview key={index} review={review} index={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default UsedReviews;
