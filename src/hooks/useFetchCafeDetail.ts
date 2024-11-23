import { dummyCafeAnalysisIData } from "@/const/dummyData";
import { CafeAnalysisI } from "@/types/CafeAnalysis";
import { getAnalytics } from "@/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useFetchCafeDetail = (argPlaceId?: string) => {
  const params = useParams();
  // Retrieve the placeId from the URL or props
  const placeId = argPlaceId || (params.placeId as string);
  const [loading, setLoading] = useState(true);
  const [detailInfo, setDetailInfo] = useState<CafeAnalysisI>();

  useEffect(() => {
    const fetchData = async () => {
      if (!placeId) {
        console.error("placeId is required but not provided.");
        return;
      }

      const analytics: CafeAnalysisI =
        process.env.NEXT_PUBLIC_SHOW_DETAIL_STORE === "true"
          ? await getAnalytics(placeId)
          : dummyCafeAnalysisIData;
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
