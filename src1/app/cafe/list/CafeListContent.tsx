"use client";

import React, { useContext, useCallback, useState, useEffect } from "react";
import { fetchAllCafes, filterCafe } from "@/utils/api";
import "@/styles/cafe-list.scss";
import CafeRow from "./CafeCardsRow";
import CafeSearchResultList from "#/[locale]/cafe/list/CafeSearchResultList";
import { StationNameContext } from "@/contexts/StationNameContext";
// import { areaInfo } from "@/data/areas.js";
import SearchBar from "./SearchBar";
import { CafeI } from "@/types/cafes";
import useCafeModalStore from "@/store/openCafeModal";
import { useSearchParams } from "next/navigation";
import { mobile, desktop } from "@/utils/const";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

const ShopsList = ({ initialCafes }: { initialCafes: CafeI[] }) => {
  const [cafes, setCafes] = useState(initialCafes);
  const { showsCafeModal } = useCafeModalStore();
  const searchParams = useSearchParams();
  const [isUpdated, setIsUpdated] = useState(false);
  /** search keyword */
  const q = searchParams.get("q");
  const t = useTranslations("home");
  const areaInfo = t?.list.areaInfo;

  /** Update cafe list after posting cafe */
  const refetchData = useCallback(async () => {
    let updatedCafes = initialCafes;

    if (q) {
      updatedCafes = await filterCafe(q);
    } else {
      updatedCafes = await fetchAllCafes();
    }
    setIsUpdated(true);

    setCafes(updatedCafes);
  }, [q, initialCafes]);

  useEffect(() => {
    refetchData();
  }, [showsCafeModal, searchParams, refetchData]);

  /**
   * Get the top ranked cafes
   *
   * @return The top ranked cafes, limited by maxRanking.count
   */
  const rankedList = useCallback(() => {
    return cafes.length > 1
      ? cafes.sort((a, b) => b.rate - a.rate).slice(0, desktop.maxRanking.count)
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
      {/* Default Page */}
      {!q && (
        <Box sx={{ mt: { xs: 8, md: 0 } }}>
          {/* All cities in Tokyo */}
          <CafeRow
            title={t?.list?.rankingInTokyo}
            cafes={rankedList()}
            isTokyoRanking
          />

          {/* Other Areas, Not ranking style */}
          {areaInfo?.map(
            ({ title, stations }: { title: string; stations: string[] }) => (
              <CafeRow
                key={title}
                title={title}
                cafes={cafeShopsInSpecificArea(stations)}
              />
            )
          )}
        </Box>
      )}

      {/* Search Result Page */}
      {isUpdated && q && <CafeSearchResultList q={q} cafes={cafes} />}
    </>
  );
};

export default ShopsList;