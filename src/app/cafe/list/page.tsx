"use client";

import React, {
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { CafeI } from "types/cafes";
import { filterCafe, getCafe } from "_utils/api";
import "../../styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import StationSearch from "./StationSearch";

interface CafeListContextType {
  cafeList: CafeI[];
  setCafeList: Dispatch<SetStateAction<CafeI[]>>;
}

export const CafeListContext = createContext<CafeListContextType>({
  cafeList: [],
  setCafeList: () => {},
});

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

  function cafeShopsInSpecificArea(area: string) {
    return cafeList?.filter((cafe) => cafe.area === area);
    // return cafeList;
  }

  return (
    <>
      <StationSearch filterByStationName={filterByStationName} />
      <CafeListContext.Provider value={{ cafeList, setCafeList }}>
        <CafeRow
          area={stationName ? stationName : "東京都全体の人気作業カフェ"}
          cafes={cafeList}
        />
        {!stationName && (
          <>
            <CafeRow area="新宿区" cafes={cafeShopsInSpecificArea("新宿")} />
            <CafeRow area="吉祥寺" cafes={cafeShopsInSpecificArea("吉祥寺")} />
            <CafeRow area="渋谷区" cafes={cafeShopsInSpecificArea("渋谷")} />
          </>
        )}
      </CafeListContext.Provider>
    </>
  );
};

export default ShopsList;
