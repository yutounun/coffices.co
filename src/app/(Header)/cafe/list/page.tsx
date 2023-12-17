"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import Loading from "../../../loading";
import { useQuery } from "react-query";
import { CafeI } from "types/cafes";
import { getCafe } from "_utils/api";
import "../../../styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import { CafeListContext } from "../../../../contexts/CafeListContext";
import CafeSearchList from "./CafeSearchList";
import { StationNameContext } from "../../../../contexts/StationNameContext";

const ShopsList = () => {
  const { stationName } = React.useContext(StationNameContext);
  const [cafeList, setCafeList] = useState<CafeI[]>([]);

  const { data, isLoading } = useQuery("cafes", getCafe);

  useEffect(() => {
    if (data) {
      setCafeList(data);
    }
  }, [data]);

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

  const top20 = useCallback(() => {
    return cafeList?.slice(0, 20);
  }, [cafeList]);

  return (
    <>
      <CafeListContext.Provider value={{ cafeList, setCafeList }}>
        <Suspense fallback={<Loading />}>
          {stationName ? (
            <>
              <CafeSearchList
                area={stationName}
                cafes={filteredCafes()}
                isLoading={isLoading}
              />
            </>
          ) : (
            <>
              <CafeRow
                area={stationName ? stationName : "東京都の作業カフェTOP20"}
                cafes={top20()}
                isLoading={isLoading}
              />
              <CafeRow
                area="目黒・代官山エリア"
                cafes={cafeShopsInSpecificArea(["目黒駅", "代官山駅"])}
                isLoading={isLoading}
              />
              <CafeRow
                area="吉祥寺エリア"
                cafes={cafeShopsInSpecificArea(["吉祥寺駅"])}
                isLoading={isLoading}
              />
              <CafeRow
                area="代々木エリア"
                cafes={cafeShopsInSpecificArea([
                  "代々木駅",
                  "代々木上原駅",
                  "代々木八幡駅",
                ])}
                isLoading={isLoading}
              />
              <CafeRow
                area="渋谷エリア"
                cafes={cafeShopsInSpecificArea(["神泉駅", "渋谷駅"])}
                isLoading={isLoading}
              />
            </>
          )}
        </Suspense>
      </CafeListContext.Provider>
    </>
  );
};

export default ShopsList;
