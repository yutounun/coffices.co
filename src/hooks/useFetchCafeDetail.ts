import { dummyCafeAnalysisData } from "@/const/dummyData";
import { CafeDetailI } from "@/types/cafe/detail";
import { getAnalytics } from "@/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useFetchCafeDetail = () => {
  const { placeId }: { placeId: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailInfo, setDetailInfo] = useState<CafeDetailI>();

  useEffect(() => {
    const fetchData = async () => {
      const analytics: CafeDetailI =
        process.env.NEXT_PUBLIC_SHOW_DETAIL_STORE === "true"
          ? await getAnalytics(placeId)
          : dummyCafeAnalysisData;
      setDetailInfo(analytics);
      console.log(" :", analytics?.coffee_price?.min_coffee_price);
      console.log("🚀 ~ fetchData ~ analytics:", analytics);

      setLoading(false);
    };

    fetchData();
  }, [placeId, setDetailInfo]);

  return { detailInfo, loading };
};

export default useFetchCafeDetail;
