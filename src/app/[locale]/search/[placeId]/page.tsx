"use client";
import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Stack, Typography } from "@mui/material";
import useSelectedStoreStore from "@/store/selectedStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAnalytics } from "@/utils/api";
import { CafeDetailI } from "@/types/cafe/detail";
import { dummyCafeAnalysisData } from "@/const/dummyData";
import Link from "next/link";
import Stars from "@/components/ui/Stars";

const featureStyle = {
  alignItems: "center",
  borderRadius: "10%",
  border: "1px solid gray",
  gap: 1,
  py: 2,
};

const SearchByName = () => {
  const { placeId }: { placeId: string } = useParams();
  const { selectedStoreData } = useSelectedStoreStore();

  const [detailInfo, setDetailInfo] = useState<CafeDetailI>();

  const photoUrl = (photoRef: string) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const analytics: CafeDetailI =
        process.env.NEXT_PUBLIC_SHOW_DETAIL_STORE === "true"
          ? await getAnalytics(placeId)
          : dummyCafeAnalysisData;
      setDetailInfo(analytics);
      console.log(" :", analytics?.coffee_price.min_coffee_price);
      console.log("🚀 ~ fetchData ~ analytics:", analytics);
    };

    fetchData();
  }, [placeId]);

  return (
    <Stack
      direction="row"
      sx={{
        height: "90vh",
        width: "100%",
        overflowY: "auto", // 垂直スクロールを許可
      }}
    >
      {/* Stores */}
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
            <Box
              sx={{
                position: "relative",
                width: "100%", // 親要素の幅を設定
                height: "200px", // 必ず高さも設定
                overflow: "hidden", // スクロールの影響を防ぐために hidden に設定
              }}
            >
              <Image
                src={
                  process.env.NEXT_PUBLIC_SHOW_STORE_IMAGE_DETAIL === "true"
                    ? selectedStoreData?.photoRef
                    : "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
                }
                alt={selectedStoreData?.name || ""}
                fill // 親要素を埋める
                style={{ objectFit: "cover" }} // "cover" でコンテンツ全体を表示
              />
            </Box>

            <Stack direction="column" sx={{ px: 4 }}>
              {/* Title */}
              <Typography variant="h1">{selectedStoreData?.name}</Typography>
              {/* Area */}
              <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
                <Typography variant="body1">
                  {selectedStoreData?.address}
                </Typography>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${detailInfo?.name}`}
                  target="_blank"
                  style={{
                    height: "20px",
                    width: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // 水平方向にも中央揃え
                  }}
                >
                  <Image
                    src="/detail/map.svg"
                    alt="map"
                    width={20}
                    height={20}
                  />
                </Link>
              </Stack>

              {/* Rating */}
              <Stack direction="row" gap={1}>
                <Stars rate={detailInfo?.rating || 0} size="1rem" />
                <Typography variant="body1">{detailInfo?.rating}</Typography>
              </Stack>

              {/* Analytics */}
              {detailInfo && (
                <Stack
                  direction="row"
                  gap={4}
                  sx={{ alignItems: "center", justifyContent: "center", my: 4 }}
                >
                  {/* Wifi */}
                  <Stack direction="column" sx={featureStyle}>
                    <Image
                      src="/landingpage/icons/wifi.svg"
                      alt="wifi"
                      width={150}
                      height={70}
                    />
                    <Stack
                      direction="column"
                      gap={1}
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Typography variant="h4">wifi</Typography>
                      <Stack direction="row" gap={1}>
                        <Typography variant="h5">
                          {detailInfo?.wifi.wifi_available}
                        </Typography>
                        <Typography variant="h5">
                          {detailInfo?.wifi.confidence}%
                        </Typography>
                      </Stack>
                      <Typography variant="body1">by Gemini 🤖</Typography>
                    </Stack>
                  </Stack>

                  {/* Plug */}
                  <Stack direction="column" sx={featureStyle}>
                    <Image
                      src="/landingpage/icons/plug.svg"
                      alt="plug"
                      width={150}
                      height={70}
                    />
                    <Stack
                      direction="column"
                      gap={1}
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Typography variant="h4">plug</Typography>
                      <Stack direction="row" gap={1}>
                        <Typography variant="h5">
                          {detailInfo?.plug.plug_available}
                        </Typography>
                        <Typography variant="h5">
                          {detailInfo?.plug.confidence}%
                        </Typography>
                      </Stack>
                      <Typography variant="body1">by Gemini 🤖</Typography>
                    </Stack>
                  </Stack>

                  {/* Work Friendly */}
                  <Stack direction="column" sx={featureStyle}>
                    <Image
                      src="/landingpage/icons/comfort.svg"
                      alt="comfort"
                      width={150}
                      height={70}
                    />
                    <Stack
                      direction="column"
                      gap={1}
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Typography variant="h4">work friendly</Typography>
                      <Stack direction="row" gap={1}>
                        <Typography variant="h5">
                          {detailInfo?.work.suitable_for_work}
                        </Typography>
                        <Typography variant="h5">
                          {detailInfo?.work.confidence}%
                        </Typography>
                      </Stack>
                      <Typography variant="body1">by Gemini 🤖</Typography>
                    </Stack>
                  </Stack>

                  {/* Coffee */}
                  <Stack direction="column" sx={featureStyle}>
                    <Image
                      src="/landingpage/icons/coffee.svg"
                      alt="coffee"
                      width={150}
                      height={70}
                    />
                    <Stack
                      direction="column"
                      gap={1}
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Typography variant="h4">coffee</Typography>
                      <Stack direction="row" gap={1}>
                        <Typography variant="h5">
                          ${detailInfo?.coffee_price.min_coffee_price}
                        </Typography>
                        <Typography variant="h5">
                          {detailInfo?.coffee_price.confidence}%
                        </Typography>
                      </Stack>
                      <Typography variant="body1">by Gemini 🤖</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              )}

              {/* No Analysis */}
              {!detailInfo && (
                <Typography variant="body1">
                  AI Analysis is being processed. Please wait a moment.
                </Typography>
              )}
            </Stack>

            {/* AI Analysis */}
            <Stack direction="column" gap={2} sx={{ px: 4 }}>
              <Typography variant="h2">AI Analysis</Typography>
              <Box>
                <Typography variant="body1">
                  {detailInfo?.ai_analysis}
                </Typography>
              </Box>
            </Stack>

            {/* Important Reviews */}
            <Stack direction="column" gap={2} sx={{ px: 4, pt: 2, pb: 6 }}>
              <Typography variant="h2">Important Reviews used by AI</Typography>
              <Stack
                direction="row"
                gap={3}
                sx={{
                  overflowX: "auto",
                  px: 1,
                }}
              >
                {detailInfo?.important_reviews.map((review, index) => (
                  <Stack
                    key={index}
                    direction="column"
                    sx={{
                      flex: "0 0 auto",
                      px: 4,
                      py: 2,
                      backgroundColor: "white",
                      minWidth: "300px",
                      maxWidth: "400px",
                      minHeight: "150px",
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h4" sx={{ whiteSpace: "normal" }}>
                      {review}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
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
