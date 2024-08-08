import React from "react";
import { fetchAllCafes } from "@/utils/api";
import { CafeI } from "@/types/cafes";
import CafeListContent from "#/[locale]/cafe/list/CafeListContent";

const ServerShopsList = async () => {
  const cafes: CafeI[] = await fetchAllCafes();

  return <CafeListContent initialCafes={cafes} />;
};

export default ServerShopsList;
