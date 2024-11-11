"use client";
import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import useSelectedStoreStore from "@/store/selectedStore";
import Image from "next/image";
import { useState } from "react";

const featureStyle = {
  alignItems: "center",
  borderRadius: "10%",
  border: "1px solid gray",
  px: 2,
  gap: 1,
  py: 2,
};

const features = [
  {
    id: 1,
    iconSrc: "/landingpage/icons/wifi.svg",
    label: "Wifi",
    number: 5,
  },
  {
    id: 2,
    iconSrc: "/landingpage/icons/plug.svg",
    label: "Plug",
    number: 5,
  },
  {
    id: 3,
    iconSrc: "/landingpage/icons/coffee.svg",
    label: "Min-Coffee Price",
    number: 3.4,
  },
];

const SearchByName = () => {
  const { selectedStoreData } = useSelectedStoreStore();

  const [isEdited, setIsEdited] = useState(false);
  const [featureVotes, setFeatureVotes] = useState(
    features.reduce((acc, feature) => {
      acc[feature.id] = { yes: 0, no: 0 };
      return acc;
    }, {})
  );

  const handleVote = (featureId, voteType) => {
    setFeatureVotes((prevVotes) => {
      const updatedVotes = { ...prevVotes };
      const currentYesVotes = updatedVotes[featureId].yes;
      const currentNoVotes = updatedVotes[featureId].no;

      if (voteType === "yes" && currentYesVotes < 1) {
        updatedVotes[featureId].yes = currentYesVotes + 1;
      } else if (voteType === "no" && currentNoVotes < 1) {
        updatedVotes[featureId].no = currentNoVotes + 1;
      }

      return updatedVotes;
    });
  };

  const getFeatureNumber = (feature) => {
    return (
      feature.number +
      featureVotes[feature.id].yes -
      featureVotes[feature.id].no
    );
  };

  const photoUrl = (photoRef) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY}`;
  };

  return (
    <Stack direction="row" sx={{ height: "100%", width: "100%" }}>
      {/* Stores */}
      <Grid
        container
        spacing={1}
        sx={{
          overflow: "auto",
          width: "50%",
          backgroundColor: "secondary.light",
        }}
      >
        {/* Title Line */}
        <Stack
          sx={{
            gap: { xs: 0, md: 2 },
            width: "100%",
          }}
        >
          {/* Img */}
          <Box
            sx={{
              position: "relative",
              width: "100%", // 親要素の幅
              height: "300px", // 任意の高さを設定
            }}
          >
            <Image
              src={photoUrl(selectedStoreData?.photoRef)}
              alt={selectedStoreData?.name}
              fill // 親要素を埋める
              style={{ objectFit: "cover" }} // "cover", "contain", "fill" などが使用可能
            />
          </Box>

          <Stack gap={1} sx={{ px: 4 }}>
            {/* Title */}
            <Typography variant="h1">{selectedStoreData?.name}</Typography>

            {/* Area */}
            <Typography variant="body1">
              {selectedStoreData?.address}
            </Typography>

            {/* Edit Button */}
            {/* TODO: show only logged in users */}
            {!isEdited ? (
              <Button
                sx={{ width: 10 }}
                variant="contained"
                onClick={() => setIsEdited(true)}
              >
                Vote
              </Button>
            ) : (
              <Stack direction="row" gap={2}>
                <Button variant="contained" onClick={() => setIsEdited(false)}>
                  Save
                </Button>

                <Button variant="contained" onClick={() => setIsEdited(false)}>
                  Cancel
                </Button>
              </Stack>
            )}

            <Grid
              container
              gap={4}
              sx={{ alignItems: "center", justifyContent: "center", my: 4 }}
            >
              {features.map((feature) => (
                <Grid
                  key={feature.id}
                  item
                  direction="column"
                  sx={featureStyle}
                >
                  <Image
                    src={feature.iconSrc}
                    alt={feature.label}
                    width={200}
                    height={100}
                  />
                  <Stack direction="row" gap={1}>
                    <Typography variant="h4">{feature.label}</Typography>
                    <Typography variant="h4">
                      {getFeatureNumber(feature)}
                    </Typography>
                  </Stack>
                  {isEdited && (
                    <Stack direction="row" gap={2} sx={{ mt: 2 }}>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleVote(feature.id, "yes")}
                        disabled={featureVotes[feature.id].yes >= 1}
                      >
                        👋
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleVote(feature.id, "no")}
                        disabled={
                          featureVotes[feature.id].no >= 1 ||
                          feature.number + featureVotes[feature.id].yes <= 0
                        }
                      >
                        ⛔
                      </Button>
                    </Stack>
                  )}
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Grid>

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
