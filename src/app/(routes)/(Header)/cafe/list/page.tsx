"use client";
import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "loading";
import useGetCafe from "../../../../_custom/useGetCafe";
import { filterCafe, getCafe } from "_utils/api";
import "_styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import { CafeListContext } from "../../../../../contexts/CafeListContext";
import CafeSearchList from "./CafeSearchList";
import { StationNameContext } from "../../../../../contexts/StationNameContext";
import StationSearch from "./StationSearch";
import { useMediaQuery, useTheme } from "@mui/material";

const cafeInfo = [
  {
    area: "中目黒・代官山・恵比寿エリア",
    stations: ["中目黒駅", "代官山駅", "恵比寿駅"],
  },
  {
    area: "代々木上原エリア",
    stations: ["代々木駅", "代々木上原駅", "代々木八幡駅"],
  },
  {
    area: "表参道エリア",
    stations: ["外苑前駅", "表参道駅", "原宿駅", "青山一丁目駅"],
  },
  {
    area: "吉祥寺エリア",
    stations: ["吉祥寺駅", "三鷹駅"],
  },
];

const ShopsList = () => {
  const { cafeList, setCafeList } = useContext(CafeListContext);
  const { setStationName, stationName } = useContext(StationNameContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { cafes, isLoading } = useGetCafe();

  useEffect(() => {
    setCafeList(cafes);
  }, [cafes]);

  /**
   *  Find cafe in specific area
   *
   * @param stations station name
   * @returns filtered cafe
   */
  const cafeShopsInSpecificArea = useCallback(
    (stations: string[]) => {
      return cafeList.filter((cafe) =>
        stations.some((station) => cafe.station === station)
      );
    },
    [cafeList]
  );

  /**
   * Find cafe in specific area
   *
   * @return filtered cafe by station name
   */
  const filteredCafes = useCallback(() => {
    return cafeList?.filter((cafe) => {
      return cafe.station === stationName;
    });
  }, [cafeList, stationName]);

  /**
   * Filter cafe
   *
   * @param filterParam station name
   * @returns filtered cafe
   * */
  async function filterByStationName(filterParam?: string) {
    if (filterParam) {
      const filteredCafe = await filterCafe(filterParam);
      setCafeList(filteredCafe);
    }

    filterParam ? setStationName(filterParam) : setStationName("");
  }

  /**
   * Sort cafe
   *
   * @return sorted cafe
   * */
  const rankedList = useCallback(() => {
    return cafeList.length > 1
      ? cafeList?.sort((a, b) => b.rate - a.rate)
      : cafeList;
  }, [cafeList]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {isMobile && (
          <StationSearch filterByStationName={filterByStationName} />
        )}
        {stationName ? (
          <CafeSearchList
            area={stationName}
            cafes={filteredCafes()}
            isLoading={isLoading}
          />
        ) : (
          <>
            <CafeRow
              area={stationName ? stationName : "東京都の作業カフェランキング"}
              cafes={rankedList()}
              isLoading={isLoading}
            />
            {cafeInfo.map(({ area, stations }) => (
              <CafeRow
                key={area}
                area={area}
                cafes={cafeShopsInSpecificArea(stations)}
                isLoading={isLoading}
              />
            ))}
          </>
        )}
      </Suspense>
    </>
  );
};

export default ShopsList;
