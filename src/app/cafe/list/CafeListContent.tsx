"use client";

import React, { useContext, useCallback, useState } from "react";
import { filterCafe } from "@/utils/api";
import "@/styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import CafeSearchResultList from "#/cafe/list/CafeSearchResultList";
import { StationNameContext } from "@/contexts/StationNameContext";
import { areaInfo } from "@/data/areas.js";
import SearchBar from "./SearchBar";
import { CafeI } from "@/types/cafes";

enum maxRanking {
  count = 10,
}

const ShopsList = ({ initialCafes }: { initialCafes: CafeI[] }) => {
  const { setStationName, stationName } = useContext(StationNameContext);
  const [cafes, setCafes] = useState(initialCafes);

  /**
   * Filter cafes by station name
   *
   * @param filterParam - The name of the station to filter by
   */
  const filterByStationName = useCallback(
    async (filterParam?: string) => {
      if (filterParam) {
        const filteredCafe = await filterCafe(filterParam);
        setCafes(filteredCafe);
        setStationName(filterParam);
      } else {
        setStationName("");
      }
    },
    [setCafes, setStationName]
  );

  /**
   * Get cafes filtered by the selected station name
   *
   * @return The list of cafes filtered by the selected station name
   */
  const filteredCafes = useCallback(() => {
    return cafes.filter((cafe) => cafe.station === stationName);
  }, [cafes, stationName]);

  /**
   * Get the top ranked cafes
   *
   * @return The top ranked cafes, limited by maxRanking.count
   */
  const rankedList = useCallback(() => {
    return cafes.length > 1
      ? cafes.sort((a, b) => b.rate - a.rate).slice(0, maxRanking.count)
      : cafes;
  }, [cafes]);

  /**
   * Get cafes located in specific areas
   *
   * @param stations - The list of station names to filter by
   * @return The list of cafes located in the specified stations
   */
  const cafeShopsInSpecificArea = useCallback(
    (stations: string[]) => {
      return cafes.filter((cafe) =>
        stations.some((station) => cafe.station === station)
      );
    },
    [cafes]
  );

  return (
    <>
      {/* Search Bar only for mobile */}
      <SearchBar
        filterByStationName={filterByStationName}
        sx={{ display: { xs: "static", md: "none" } }}
      />

      {/* Default Page */}
      {!stationName && (
        <>
          {/* All cities in Tokyo */}
          <CafeRow titleType="Tokyo" cafes={rankedList()} isTokyoRanking />

          {/* Other Areas, Not ranking style */}
          {areaInfo.map(
            ({ title, stations }: { title: string; stations: string[] }) => (
              <CafeRow
                key={title}
                titleType={title}
                cafes={cafeShopsInSpecificArea(stations)}
              />
            )
          )}
        </>
      )}

      {/* Search Result Page */}
      {stationName && (
        <CafeSearchResultList area={stationName} cafes={filteredCafes()} />
      )}
    </>
  );
};

export default ShopsList;
