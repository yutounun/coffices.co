"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { locationObjI } from "@/types/GooglePlacesTypes";

const GoogleMap = ({
  locationName,
  clickedName,
}: {
  locationName: string | locationObjI;
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
      return (
        <GoogleMapsEmbed
          loading="lazy"
          allowfullscreen={true}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          height={850}
          center={(locationName.lat, locationName.lng)}
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
