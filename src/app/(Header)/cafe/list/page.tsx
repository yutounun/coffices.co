"use client";
import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../../../loading";
import { useQuery } from "react-query";
import { CafeI } from "types/cafes";
import { filterCafe, getCafe } from "_utils/api";
import "../../../styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import { CafeListContext } from "../../../../contexts/CafeListContext";
import CafeSearchList from "./CafeSearchList";
import { StationNameContext } from "../../../../contexts/StationNameContext";
import StationSearch from "./StationSearch";
import { useMediaQuery, useTheme } from "@mui/material";

const ShopsList = () => {
  const { cafeList, setCafeList } = useContext(CafeListContext);
  const { setStationName, stationName } = useContext(StationNameContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCafe().then((cafes) => {
      setCafeList(cafes);
      setIsLoading(false);
    });
  }, []);

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
  function filterByStationName(filterParam?: string) {
    if (!filterParam) {
      // getCafeLocal();
    } else {
      filterCafe(filterParam).then((json) => setCafeList(json));
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
              area={stationName ? stationName : "東京都の作業カフェランキング"}
              cafes={rankedList()}
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
              area="代々木上原エリア"
              cafes={cafeShopsInSpecificArea([
                "代々木駅",
                "代々木上原駅",
                "代々木八幡駅",
              ])}
              isLoading={isLoading}
            />
          </>
        )}
      </Suspense>
    </>
  );
};

export default ShopsList;
