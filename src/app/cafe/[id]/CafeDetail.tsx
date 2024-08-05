"use client";
import { CafeI } from "@/types/cafes";
import { fetchCafeById } from "@/utils/api";
import Image from "next/image";
import CafeDetailContent from "#/cafe/[id]/CafeDetailContent";
import CafeDetailReview from "#/cafe/[id]/CafeDetailReview";
import Recommndation from "@/app/cafe/[id]/Recommndation";
import { Box } from "@mui/material";
import { desktop } from "@/utils/const";
import GoogleMap from "@/components/ui/GoogleMap";
import { useEffect, useState, useCallback } from "react";
import useCafeModalStore from "@/store/openCafeModal";
import useReviewModalStore from "@/store/reviewModal";

const CafeDetailPage = ({
  initialCafeData,
  initialCafesData,
}: {
  initialCafeData: CafeI;
  initialCafesData: CafeI[];
}) => {
  const [cafe, setCafe] = useState(initialCafeData);
  const { showsCafeModal } = useCafeModalStore();
  const { showsReviewModal } = useReviewModalStore();

  const refetchCafeData = useCallback(async () => {
    const fetchedCafe = await fetchCafeById(cafe._id);
    setCafe(fetchedCafe);
  }, [cafe?._id]);

  useEffect(() => {
    refetchCafeData();
  }, [showsCafeModal, showsReviewModal, refetchCafeData]);

  return (
    <>
      <Box sx={{ px: desktop.space.around }}>
        {/* Cafe Photo */}
        <Box sx={{ height: "30em", width: "100%", position: "relative" }}>
          <Image
            src={cafe.image ? cafe.image : "/logo/orange.png"}
            alt="image"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "20px" }}
          />
        </Box>

        {/* Content */}
        <CafeDetailContent cafe={cafe} />

        {/* Google Map */}
        <GoogleMap locationName={cafe.title} />
      </Box>

      {/* Review */}
      <CafeDetailReview cafeId={cafe._id} reviews={cafe.reviews} />

      {/* Recommndation */}
      <Recommndation cafes={initialCafesData} />
    </>
  );
};

export default CafeDetailPage;
