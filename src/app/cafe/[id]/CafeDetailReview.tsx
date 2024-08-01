import { Stack, Typography } from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";
import { ReviewI } from "@/types/cafes";
import ScrollCardRow from "@/components/ui/ScrollCardRow";
import CafeDetailReviewCard from "./CafeDetailReviewCard";

const CafeDetailReview = ({ reviews }: { reviews: ReviewI[] }) => {
  return (
    <Stack sx={{ my: 7 }}>
      {/* Title */}
      <Typography variant="h2" sx={{ mb: 3, mx: 25 }}>
        Review
      </Typography>

      {/* Review Box */}
      {reviews.length !== 0 && (
        <ScrollCardRow cardCount={reviews.length}>
          {reviews.map((review: ReviewI, index) => (
            <CafeDetailReviewCard
              key={review.id}
              review={review}
              index={index}
            />
          ))}
        </ScrollCardRow>
      )}

      {/* No Review */}
      {reviews.length === 0 && (
        <Typography variant="body1" sx={{ mb: 1, ml: 25 }}>
          Please leave your review
        </Typography>
      )}

      <CustomButton sx={{ mx: 25, my: 3 }}>Leave a review</CustomButton>
    </Stack>
  );
};

export default CafeDetailReview;
