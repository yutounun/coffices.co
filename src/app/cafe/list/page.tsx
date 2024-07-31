import React from "react";
import { getCafe } from "@/utils/api";
import { CafeI } from "@/types/cafes";
import CafeListContent from "#/cafe/list/CafeListContent";

const ServerShopsList = async () => {
  const cafes: CafeI[] = await getCafe();

  return <CafeListContent initialCafes={cafes} />;
};

export default ServerShopsList;
