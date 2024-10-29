"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { locationObjI } from "@/types/GooglePlacesTypes";

const GoogleMap = ({
  locationKeyword,
  currentLocation,
  clickedName,
}: {
  locationKeyword: string | null;
  currentLocation: locationObjI | null;
  clickedName: string;
}) => {
  const showMap = true;

  // Production Mode
  if (showMap) {
    if (clickedName) {
      return (
        <GoogleMapsEmbed
          loading="lazy"
          allowfullscreen={true}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          height={850}
          width="100%"
          mode="place"
          q={clickedName}
        />
      );
    } else {
      if (locationKeyword) {
        return (
          <GoogleMapsEmbed
            loading="lazy"
            allowfullscreen={true}
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            height={850}
            width="100%"
            mode="search"
            q={`coffee shops in ${locationKeyword}`}
          />
        );
      }
      return (
        <GoogleMapsEmbed
          loading="lazy"
          allowfullscreen={true}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          height={850}
          center={`${currentLocation.lat},${currentLocation.lng}`}
          zoom={"15"}
          width="100%"
          mode="search"
          q={`coffee shops `}
        />
      );
    }
  }

  // Dummy Mode
  return <Image src="/dummy/gmap.png" alt="coffee" width={800} height={800} />;
};

export default GoogleMap;
