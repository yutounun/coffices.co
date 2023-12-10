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
import useCreateModalStore from "../../../store/openCreateCafeModal";
import CafePostModal from "../_create/CafePostModal";

interface CafeListContextType {
  cafeList: CafeI[];
  setCafeList: Dispatch<SetStateAction<CafeI[]>>;
}

export const CafeListContext = createContext<CafeListContextType>({
  cafeList: [],
  setCafeList: () => {},
});

const ShopsList = () => {
  const { showsCreateModal, openCreateCafeModal, closeCreateCafeModal } =
    useCreateModalStore();
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
            <CafeRow area="新宿区" cafes={cafeShopsInSpecificArea("新宿区")} />
            <CafeRow
              area="千代田区"
              cafes={cafeShopsInSpecificArea("千代田区")}
            />
            <CafeRow area="渋谷区" cafes={cafeShopsInSpecificArea("渋谷区")} />
          </>
        )}
        {showsCreateModal && (
          <CafePostModal
            handleModalClose={closeCreateCafeModal}
            showModal={showsCreateModal}
          />
        )}
      </CafeListContext.Provider>
    </>
  );
};

export default ShopsList;
