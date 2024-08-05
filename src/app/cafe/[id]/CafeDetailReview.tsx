"use client";

import { Stack, Typography } from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";
import { ReviewI } from "@/types/cafes";
import ScrollCardRow from "@/components/ui/ScrollCardRow";
import CafeDetailReviewCard from "./CafeDetailReviewCard";
import { useState } from "react";
import SmallModal from "@/components/ui/SmallModal";
import { mobile, desktop } from "@/utils/const";
import useReviewModalStore from "@/store/reviewModal";

const CafeDetailReview = ({
  reviews,
  cafeId,
}: {
  reviews: ReviewI[];
  cafeId: string;
}) => {
  const [open, setOpen] = useState(false);
  const { openReviewModal, closeReviewModal } = useReviewModalStore();

  const openCreateReview = () => {
    openReviewModal();
  };

  const handleClose = () => {
    setOpen(false);
    closeReviewModal();
  };

  return (
    <Stack sx={{ my: 7, mx: 0, py: 0 }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          mb: 3,
          mx: { xs: mobile.space.aroundX, md: desktop.space.aroundX },
        }}
      >
        Review
      </Typography>

      {/* Review Box */}
      {reviews.length !== 0 && (
        <ScrollCardRow
          height={{ xs: "30em", md: "350px" }}
          cardCount={reviews.length}
          type="review"
        >
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
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            ml: { xs: mobile.space.aroundX, md: desktop.space.aroundX },
          }}
        >
          Please leave your review
        </Typography>
      )}

      {/* Leading to Add review modal */}
      <CustomButton
        onClick={openCreateReview}
        sx={{
          mx: { xs: mobile.space.aroundX, md: desktop.space.aroundX },
          my: 3,
        }}
      >
        Leave a review
      </CustomButton>

      {/* Simple Modal */}
      <SmallModal
        cafeId={cafeId}
        title="Add a Review"
        description="Please enter your review below:"
      />
    </Stack>
  );
};

export default CafeDetailReview;
