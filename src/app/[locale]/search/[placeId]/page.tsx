import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Stack, Typography } from "@mui/material";
import HeroImage from "./HeroImage";
import OverView from "./OverView";
import AnalisisChips from "./AnalisisChips";
import AiAnalisisMsg from "./AiAnalisisMsg";
import UsedReviews from "./UsedReviews";
import { findDetailCafeInfo, getAnalytics } from "@/utils/api";
import { dummyCafeAnalysisIData } from "@/const/dummyData";
import { CafeAnalysisI } from "@/types/CafeAnalysis";
import { CafeDetailI } from "@/types/GooglePlacesTypes";

const CafeDetail = async ({ params }: { params: { placeId: string } }) => {
  const { placeId } = params;

  const cafeDetail: CafeDetailI =
    process.env.NEXT_PUBLIC_SHOW_DETAIL_STORE === "true"
      ? await findDetailCafeInfo(placeId)
      : dummyCafeAnalysisIData;

  const reviews = cafeDetail?.reviews || [];

  const analytics: CafeAnalysisI =
    process.env.NEXT_PUBLIC_SHOW_DETAIL_STORE === "true"
      ? await getAnalytics(reviews)
      : dummyCafeAnalysisIData;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        height: { xs: "93vh !important", md: "90vh !important" },
        mt: { xs: "7vh", md: "10vh" },
        width: "100%",
        overflowY: "auto",
      }}
    >
      {/* Map for mobile */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          flexGrow: 1,
          flexBasis: 0,
          width: "100%",
        }}
      >
        <GoogleMap location={cafeDetail} />
      </Box>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          overflow: "auto",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Stack
          sx={{
            gap: { xs: 0, md: 2 },
            width: "100%",
          }}
        >
          <Stack gap={3} sx={{ px: 4 }}>
            <HeroImage
              name={cafeDetail?.name}
              photos={cafeDetail?.photos || []}
            />

            <Stack direction="column">
              {/* Title & Area & Rating */}
              <OverView cafeDetail={cafeDetail} />

              {/* Analytics */}
              {analytics?.ai_analysis ? (
                <Stack direction="column" gap={2} sx={{ my: 2 }}>
                  <AnalisisChips detailInfo={analytics} />
                  <AiAnalisisMsg detailInfo={analytics} />
                  <UsedReviews detailInfo={analytics} />
                </Stack>
              ) : (
                <Typography variant="body1">
                  AI Analysis is being processed. Please wait a moment.
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Map for laptop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flexGrow: 1,
          flexBasis: 0,
          width: "100%",
        }}
      >
        <GoogleMap location={cafeDetail} />
      </Box>
    </Stack>
  );
};

export default CafeDetail;
