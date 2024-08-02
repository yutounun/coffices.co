"use client";

import { Stack, Typography } from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";
import { ReviewI } from "@/types/cafes";
import ScrollCardRow from "@/components/ui/ScrollCardRow";
import CafeDetailReviewCard from "./CafeDetailReviewCard";
import { useState } from "react";
import SmallModal from "@/components/ui/SmallModal";
import { space } from "@/utils/const";

const CafeDetailReview = ({
  reviews,
  cafeId,
}: {
  reviews: ReviewI[];
  cafeId: string;
}) => {
  const [open, setOpen] = useState(false);

  const openCreateReview = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack sx={{ my: 7 }}>
      {/* Title */}
      <Typography variant="h2" sx={{ mb: 3, mx: space.around }}>
        Review
      </Typography>

      {/* Review Box */}
      {reviews.length !== 0 && (
        <ScrollCardRow cardCount={reviews.length}>
          {reviews.map((review: ReviewI, index) => (
            <CafeDetailReviewCard
              lastIndex={reviews.length - 1}
              key={index}
              review={review}
              index={index}
            />
          ))}
        </ScrollCardRow>
      )}

      {/* No Review */}
      {reviews.length === 0 && (
        <Typography variant="body1" sx={{ mb: 1, ml: space.around }}>
          Please leave your review
        </Typography>
      )}

      {/* Leading to Add review modal */}
      <CustomButton onClick={openCreateReview} sx={{ mx: space.around, my: 3 }}>
        Leave a review
      </CustomButton>

      {/* Simple Modal */}
      <SmallModal
        cafeId={cafeId}
        open={open}
        handleClose={handleClose}
        title="Add a Review"
        description="Please enter your review below:"
      />
    </Stack>
  );
};

export default CafeDetailReview;
