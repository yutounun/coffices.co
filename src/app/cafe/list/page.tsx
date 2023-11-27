import React from "react";
import "./cafe-list.scss";
import CafeRow from "./CafeRow";
import Data from "./data.json";

const ShopsList = () => {
  function filterEbisuAndMeguro() {
    const filteredData = Data.filter((cafe) => {
      if (cafe.area.includes("目黒") || cafe.area.includes("銀座")) {
        return cafe;
      }
    });
    return filteredData;
  }
  return (
    <>
      <CafeRow area="恵比寿・目黒周辺" cafes={filterEbisuAndMeguro()} />
      <CafeRow area="銀座・新橋周辺" cafes={Data} />
      <CafeRow area="表参道・青山周辺" cafes={Data} />
    </>
  );
};

export default ShopsList;
