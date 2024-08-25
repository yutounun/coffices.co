"use client";

import React, { useCallback, useState, useEffect } from "react";
import stationsArea from "@/data/stationsArea.json";
import { fetchAllCafes, filterCafe } from "@/utils/api";
import "@/styles/cafe-list.scss";
import CafeRow from "./CafeCardsRow";
import CafeSearchResultList from "#/[locale]/cafe/list/CafeSearchResultList";
import { CafeI } from "@/types/cafes";
import useCafeModalStore from "@/store/openCafeModal";
import { useSearchParams } from "next/navigation";
import { desktop } from "@/utils/const";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

const ShopsList = ({ initialCafes }: { initialCafes: CafeI[] }) => {
  const [cafes, setCafes] = useState(initialCafes);
  const { showsCafeModal } = useCafeModalStore();
  const searchParams = useSearchParams();
  const [isUpdated, setIsUpdated] = useState(false);
  /** search keyword */
  const q = searchParams.get("q");
  const t = useTranslations("list");
  const areaInfo = [
    {
      title: t("areaInfo.nakameguro.title"),
      stations: ["中目黒駅", "代官山駅", "恵比寿駅"],
    },
    {
      title: t("areaInfo.kichijoji.title"),
      stations: ["吉祥寺駅", "三鷹駅"],
    },
    {
      title: t("areaInfo.omotesando.title"),
      stations: ["外苑前駅", "表参道駅", "原宿駅", "青山一丁目駅"],
    },
    {
      title: t("areaInfo.yoyogi.title"),
      stations: ["代々木駅", "代々木上原駅", "代々木八幡駅"],
    },
  ];

  /** Update cafe list after posting cafe */
  const refetchData = useCallback(async () => {
    let updatedCafes = initialCafes;

    if (q) {
      // Find place object with keyword
      const matchingArea = stationsArea.find(
        (area) => area.en === q || area.ja === q
      );
      if (matchingArea) {
        const nameToSearch = matchingArea.ja;
        updatedCafes = await filterCafe(nameToSearch);
      } else {
        updatedCafes = await fetchAllCafes();
      }
    } else {
      // qがない場合、全カフェを取得
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
            title={t("rankingInTokyo")}
            cafes={rankedList()}
            isTokyoRanking
          />

          {/* Other Areas, Not ranking style */}
          {areaInfo.map(
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
