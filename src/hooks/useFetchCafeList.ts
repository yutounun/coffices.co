import { dummyStores } from "@/const/dummyData";
import useSelectedStoreStore from "@/store/selectedStore";
import { StoreI } from "@/types/GooglePlacesTypes";
import { searchCafeOnGoogle } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useFetchCafeList = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const [stores, setStores] = useState<StoreI[]>([]);
  const [clickedName, setClickedName] = useState<string>("");
  const [currentLocationMap, setCurrentLocationMap] = useState({
    lat: 0,
    lng: 0,
  });
  const { setSelectedStoreData } = useSelectedStoreStore();
  const [loading, setLoading] = useState(true);

  function handleClickStore(
    placeId: string,
    name: string,
    formatted_address: string,
    open_now?: boolean,
    photoRef?: string
  ) {
    setSelectedStoreData({
      id: placeId,
      name: name,
      address: formatted_address,
      isOpen: open_now,
      photoRef: photoRef,
    });
    setClickedName(name);
  }

  useEffect(() => {
    const fetchStoresNearby = async () => {
      if (typeof navigator !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setCurrentLocationMap(currentLocation);

            try {
              // 位置情報を取得した後にカフェを検索する
              setLoading(true);
              const data =
                process.env.NEXT_PUBLIC_SHOW_STORE_LIST === "true"
                  ? await searchCafeOnGoogle(currentLocation)
                  : dummyStores;

              console.log("🚀 ~ currentLocation:", currentLocation);
              setStores(data);
              setLoading(false);
            } catch (error) {
              console.error("Error fetching cafes:", error);
            }
          },
          (error) => {
            console.error("Error obtaining location:", error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      }
    };

    const fetchStoresByKeyword = async (location: string) => {
      try {
        // 位置情報を取得した後にカフェを検索する
        setLoading(true);
        const data = await searchCafeOnGoogle(null, location);
        setStores(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cafes:", error);
      }
    };
    // fetchStoresNearby();
    location ? fetchStoresByKeyword(location) : fetchStoresNearby();
  }, [location]);

  return {
    stores,
    currentLocationMap,
    clickedName,
    handleClickStore,
    location,
    loading,
  };
};

export default useFetchCafeList;
