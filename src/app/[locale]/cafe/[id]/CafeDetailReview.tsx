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
import { useTranslations } from "next-intl";

const CafeDetailReview = ({
  reviews,
  cafeId,
}: {
  reviews: ReviewI[];
  cafeId: string;
}) => {
  const t = useTranslations("detail");
  const { openReviewModal } = useReviewModalStore();

  const openCreateReview = () => {
    openReviewModal();
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
        {t("review.title")}
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
          {t("review.noReview")}
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
        {t("review.postBtn")}
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
