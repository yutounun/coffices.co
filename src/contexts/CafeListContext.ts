"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { CafeI } from "@/types/cafes";

export interface CafeListContextType {
  cafeList: CafeI[];
  setCafeList: Dispatch<SetStateAction<CafeI[]>>;
}

export const CafeListContext = createContext<CafeListContextType>({
  cafeList: [],
  setCafeList: () => {},
});
