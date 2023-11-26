import React from "react";
import "./cafe-list.scss";
import CafeRow from "./CafeRow";
import Data from "./data.json";

const ShopsList = () => {
  return (
    <>
      <CafeRow cafes={Data} />
      <CafeRow cafes={Data} />
    </>
  );
};

export default ShopsList;
