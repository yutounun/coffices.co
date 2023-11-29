"use client";

import React, { useEffect, useState } from "react";
import { CafeI } from "types/cafes";
import { getCafe } from "_utils/api";
import "./cafe-list.scss";
import CafeRow from "./CafeRow";
import StationSearch from "./StationSearch";

const ShopsList = () => {
  const [cafeList, setCafeList] = useState<CafeI[]>([]);
  useEffect(() => {
    getCafe()
      .then((json) => {
        setCafeList(json);
      })
      .catch((err) => console.log("error", err));
  }, []);

  function filterEbisuAndMeguro() {
    const filteredData = cafeList;
    return filteredData;
  }
  return (
    <>
      <StationSearch />
      <CafeRow area="恵比寿・目黒周辺" cafes={filterEbisuAndMeguro()} />
      <CafeRow area="銀座・新橋周辺" cafes={cafeList} />
      <CafeRow area="表参道・青山周辺" cafes={cafeList} />
    </>
  );
};

export default ShopsList;
