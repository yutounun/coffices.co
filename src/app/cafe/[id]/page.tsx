import { CafeI } from "@/types/cafes";
import { fetchAllCafes, fetchCafeById } from "@/utils/api";
import Image from "next/image";
import CafeDetailContent from "./CafeDetailContent";
import CafeDetailReview from "./CafeDetailReview";
import CafeCardRow from "../list/CafeCardsRow";

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

      {/* Review */}
      <CafeDetailReview reviews={cafe.reviews} />

      {/* Rec */}
      <CafeCardRow titleType="You also might like..." cafes={cafes} />
    </>
  );
};

export default CafeDetailPage;
