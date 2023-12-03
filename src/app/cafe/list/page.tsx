"use client";

import React, { useEffect, useState } from "react";
import { CafeI } from "types/cafes";
import { filterCafe, getCafe } from "_utils/api";
import "./cafe-list.scss";
import CafeRow from "./CafeRow";
import StationSearch from "./StationSearch";

const ShopsList = () => {
  const [cafeList, setCafeList] = useState<CafeI[]>([]);
  const [stationName, setStationName] = useState("");
  useEffect(() => {
    getCafeLocal();
  }, []);

  async function getCafeLocal() {
    getCafe().then((json) => setCafeList(json));
  }

  function filterByStationName(filterParam?: string) {
    if (!filterParam) {
      getCafeLocal();
    } else {
      filterCafe(filterParam).then((json) => setCafeList(json));
    }
    filterParam ? setStationName(filterParam) : setStationName("");
  }

  return (
    <>
      <StationSearch filterByStationName={filterByStationName} />
      <CafeRow
        area={stationName ? stationName : "東京の人気作業カフェ"}
        cafes={cafeList}
      />
      {/* <CafeRow area="銀座・新橋周辺" cafes={cafeList} />
      <CafeRow area="表参道・青山周辺" cafes={cafeList} /> */}
    </>
  );
};

export default ShopsList;
