// Server Component

import { CafeI } from "@/types/cafes";
import { fetchAllCafes, fetchCafeById } from "@/utils/api";
import Image from "next/image";
import CafeDetailContent from "#/cafe/[...id]/CafeDetailContent";
import CafeDetailReview from "#/cafe/[...id]/CafeDetailReview";
import CafeCardRow from "../list/CafeCardsRow";

const CafeDetailPage = async () => {
  const cafe: CafeI = await fetchCafeById("66aa0148bedde5ee532b7be1");
  const cafes: CafeI[] = await fetchAllCafes();
  return (
    <>
      {/* Cafe Photo */}
      <Image
        src={cafe.image}
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
      <CafeDetailReview />

      {/* Rec */}
      <CafeCardRow titleType="You also might like..." cafes={cafes} />
    </>
  );
};

export default CafeDetailPage;
