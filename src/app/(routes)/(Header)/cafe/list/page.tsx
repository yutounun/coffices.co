"use client";
import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "loading";
import useGetCafe from "@/hooks/useGetCafe";
import { filterCafe, getCafe } from "@/utils/api";
import "#/_styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import { CafeListContext } from "@/contexts/CafeListContext";
import CafeSearchList from "./CafeSearchList";
import { StationNameContext } from "@/contexts/StationNameContext";
import StationSearch from "./StationSearch";
import useMobile from "@/hooks/useMobile";
import useTranslate from "@/hooks/useTranslate";

enum maxRanking {
  count = 10,
}

const ShopsList = () => {
  const { cafeList, setCafeList } = useContext(CafeListContext);
  const { setStationName, stationName } = useContext(StationNameContext);
  const { isMobile } = useMobile();
  const { cafes, isLoading } = useGetCafe();
  const { t } = useTranslate();

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
      ? cafeList?.sort((a, b) => b.rate - a.rate).slice(0, maxRanking.count)
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
            {t && t.title}
            <CafeRow
              area={stationName ? stationName : t?.list?.rankingInTokyo}
              cafes={rankedList()}
              isLoading={isLoading}
              isRanking
            />
            {t?.list?.titles?.map(
              ({ area, stations }: { area: string; stations: string[] }) => (
                <CafeRow
                  key={area}
                  area={area}
                  cafes={cafeShopsInSpecificArea(stations)}
                  isLoading={isLoading}
                />
              )
            )}
          </>
        )}
      </Suspense>
    </>
  );
};

export default ShopsList;
