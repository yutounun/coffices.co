import React from "react";
import "./cafe-list.scss";
import CafeRow from "./CafeRow";
import Data from "./data.json";

const ShopsList = () => {
  return (
    <>
      <CafeRow area="恵比寿・目黒周辺" cafes={Data} />
      <CafeRow area="銀座・新橋周辺" cafes={Data} />
      <CafeRow area="表参道・青山周辺" cafes={Data} />
    </>
  );
};

export default ShopsList;
