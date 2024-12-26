"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useSearchParams, useRouter } from "next/navigation";
import { CafeDetailI } from "@/types/GooglePlacesTypes";
import Loading from "@/app/[locale]/loading";
import { useMediaQuery, useTheme } from "@mui/material";

// Define `libraries` as a constant outside the component
const libraries = ["places"] as any;

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
};
const containerMobileStyle = {
  width: "100%",
  height: "200px",
};

type MapOptions = google.maps.MapOptions;

function CustomGoogleMap({ location }: { location?: CafeDetailI }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Access the MUI theme
  const theme = useTheme();

  // Check if the screen size is below the `md` breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Parse lat and lng from query parameters
  const paramLat = searchParams.get("lat")
    ? parseFloat(searchParams.get("lat")!)
    : 49.2339753;
  const paramLng = searchParams.get("lng")
    ? parseFloat(searchParams.get("lng")!)
    : -122.9940621;
  const locationNameParam = searchParams.get("location");

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<
    { lat: number; lng: number; name: string; placeId: string }[]
  >([]);
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: paramLat,
    lng: paramLng,
  });

  // Separate state for current location
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 49.2339753, lng: -122.9940621 });

  // Use `libraries` from the constant
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_ADDRESS_CHECK_API_KEY as string,
    libraries, // Reuse the static array
  });

  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const geocode = useCallback(() => {
    if (isLoaded && window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { address: location?.formatted_address || locationNameParam },
        (results: any, status) => {
          if (status === "OK" && results[0]?.geometry?.location) {
            setCenter({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            });
          } else {
            console.error("Geocoding failed:", status);
          }
        }
      );
    }
  }, [isLoaded, location?.formatted_address, locationNameParam]);

  useEffect(() => {
    if (location) {
      geocode();
    }
  }, [location, geocode]);

  useEffect(() => {
    if (location || locationNameParam) {
      geocode();
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update the current location based on the user's actual location
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      console.error("No location name and geolocation is unsupported.");
    }
  }, [location, geocode, locationNameParam]);

  useEffect(() => {
    if (map && center) {
      map.setCenter(center);

      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: center,
          radius: 1500,
          type: "cafe",
        },
        (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            const shopMarkers = results.map((place) => ({
              lat: place.geometry?.location?.lat() || 0,
              lng: place.geometry?.location?.lng() || 0,
              name: place.name || "Unknown",
              placeId: place.place_id || "",
            }));
            setMarkers(shopMarkers);
          } else {
            console.error("PlacesService failed:", status);
          }
        }
      );
    }
  }, [map, center]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker: {
    lat: number;
    lng: number;
    placeId: string;
  }) => {
    if (map) {
      map.panTo({ lat: marker.lat, lng: marker.lng });
    }
    router.push(
      `/en/search/${marker.placeId}?lat=${marker.lat}&lng=${marker.lng}`
    );
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return center ? (
    <GoogleMap
      mapContainerStyle={isMobile ? containerMobileStyle : containerStyle}
      center={center || currentLocation}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {/* Show the user's current location */}
      <Marker
        position={currentLocation}
        icon="/map/currentPin.png"
        title="Your Current Location"
      />

      {/* If location is provided, show its marker */}
      {location ? (
        <Marker
          position={center}
          title={location.name || "Selected Location"}
          icon="/map/coffee.png"
          onClick={() =>
            handleMarkerClick({
              lat: location?.geometry?.location.lat || 0,
              lng: location?.geometry?.location.lng || 0,
              placeId: location.place_id || "",
            })
          }
        />
      ) : (
        markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.name}
            onClick={() => handleMarkerClick(marker)}
            icon="/map/coffee.png"
          />
        ))
      )}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default React.memo(CustomGoogleMap);
