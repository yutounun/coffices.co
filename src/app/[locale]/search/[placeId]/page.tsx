"use client";
import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Stack, Typography } from "@mui/material";
import useSelectedStoreStore from "@/store/selectedStore";
import HeroImage from "./HeroImage";
import OverView from "./OverView";
import AnalisisCards from "./AnalisisCards";
import AiAnalisisMsg from "./AiAnalisisMsg";
import UsedReviews from "./UsedReviews";
import useFetchCafeDetail from "@/hooks/useFetchCafeDetail";
import Loading from "../../loading";

const SearchByName = () => {
  const { selectedStoreData } = useSelectedStoreStore();

  const { detailInfo, loading } = useFetchCafeDetail();
  console.log("🚀 ~ SearchByName ~ detailInfo:", detailInfo);

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack
      direction="row"
      sx={{
        height: "90vh",
        width: "100%",
        overflowY: "auto",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          overflow: "auto",
          width: "50%",
          backgroundColor: "secondary.light",
        }}
      >
        <Stack
          sx={{
            gap: { xs: 0, md: 2 },
            width: "100%",
          }}
        >
          <Stack gap={1}>
            <HeroImage selectedStoreData={selectedStoreData} />

            <Stack direction="column" sx={{ px: 4 }}>
              {/* Title & Area & Rating */}
              <OverView
                selectedStoreData={selectedStoreData}
                detailInfo={detailInfo}
              />

              {/* Analytics */}
              {detailInfo?.ai_analysis ? (
                <>
                  <AnalisisCards detailInfo={detailInfo} />
                  <AiAnalisisMsg detailInfo={detailInfo} />
                  <UsedReviews detailInfo={detailInfo} />
                </>
              ) : (
                <Typography variant="body1">
                  AI Analysis is being processed. Please wait a moment.
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Map */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 0,
          width: "100%",
        }}
      >
        <GoogleMap clickedName={selectedStoreData?.name} />
      </Box>
    </Stack>
  );
};

export default SearchByName;
