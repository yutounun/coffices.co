import { CafeI } from "@/types/cafes";
import { fetchAllCafes, fetchCafeById } from "@/utils/api";
import Image from "next/image";
import CafeDetailContent from "#/cafe/[id]/CafeDetailContent";
import CafeDetailReview from "#/cafe/[id]/CafeDetailReview";
import Recommndation from "@/app/cafe/[id]/Recommndation";
import { Box } from "@mui/material";

interface CafeDetailPageProps {
  params: {
    id: string;
  };
}

const CafeDetailPage = async ({ params }: CafeDetailPageProps) => {
  const cafeId = params.id;

  const cafe: CafeI = await fetchCafeById(cafeId);
  const cafes: CafeI[] = await fetchAllCafes();

  return (
    <>
      <Box sx={{ px: 25 }}>
        {/* Cafe Photo */}
        <Image
          src={cafe.image ? cafe.image : "/logo/orange.png"}
          alt="image"
          width={1070}
          height={413}
          style={{ borderRadius: "20px" }}
        />

        {/* Content */}
        <CafeDetailContent cafe={cafe} />

        {/* Google Map */}
        <Image src="/googlemap.jpg" alt="googlemap" width={1070} height={513} />
      </Box>

      {/* Review */}
      <CafeDetailReview reviews={cafe.reviews} />

      {/* Recommndation */}
      <Recommndation cafes={cafes} />
    </>
  );
};

export default CafeDetailPage;
