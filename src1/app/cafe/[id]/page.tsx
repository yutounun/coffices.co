import { CafeI } from "@/types/cafes";
import { fetchAllCafes, fetchCafeById } from "@/utils/api";
import CafeDetail from "#/[locale]/cafe/[id]/CafeDetail";

interface CafeDetailPageProps {
  params: {
    id: string;
  };
}

const CafeDetailPage = async ({ params }: CafeDetailPageProps) => {
  const cafeId = params.id;

  const cafe: CafeI = await fetchCafeById(cafeId);
  const cafes: CafeI[] = await fetchAllCafes();

  return <CafeDetail initialCafeData={cafe} initialCafesData={cafes} />;
};

export default CafeDetailPage;
