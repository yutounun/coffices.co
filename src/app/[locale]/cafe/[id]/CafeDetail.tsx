"use client";
import { CafeI } from "@/types/cafes";
import { fetchCafeById } from "@/utils/api";
import Image from "next/image";
import CafeDetailContent from "#/[locale]/cafe/[id]/CafeDetailContent";
import CafeDetailReview from "#/[locale]/cafe/[id]/CafeDetailReview";
import Recommndation from "#/[locale]/cafe/[id]/Recommndation";
import { Box } from "@mui/material";
import { mobile, desktop } from "@/utils/const";
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
      <Box sx={{ px: { xs: mobile.space.aroundX, md: desktop.space.aroundX } }}>
        {/* Cafe Photo */}
        <Box
          sx={{
            height: { xs: "15em", md: "30em" },
            width: "100%",
            position: "relative",
          }}
        >
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
