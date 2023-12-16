"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../../loading";
import { useQuery } from "react-query";
import { CafeI } from "types/cafes";
import { filterCafe, getCafe } from "_utils/api";
import "../../styles/cafe-list.scss";
import CafeRow from "./CafeRow";
import StationSearch from "./StationSearch";
import useCreateModalStore from "../../../store/openCreateCafeModal";
import CafePostModal from "../_create/CafePostModal";
import { CafeListContext } from "../../../contexts/CafeListContext";
import CafeSearchList from "./CafeSearchList";

const ShopsList = () => {
  const { showsCreateModal, closeCreateCafeModal } = useCreateModalStore();
  const [cafeList, setCafeList] = useState<CafeI[]>([]);
  const [stationName, setStationName] = useState("");

  const { data, isLoading } = useQuery("cafes", getCafe);

  useEffect(() => {
    if (data) {
      setCafeList(data);
    }
  }, [data]);

  function filterByStationName(filterParam?: string) {
    if (!filterParam) {
      // getCafeLocal();
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
        <Suspense fallback={<Loading />}>
          {stationName ? (
            <>
              <CafeSearchList
                area={stationName}
                cafes={cafeList}
                isLoading={isLoading}
              />
            </>
          ) : (
            <>
              <CafeRow
                area={stationName ? stationName : "東京都全体の人気作業カフェ"}
                cafes={cafeList}
                isLoading={isLoading}
              />
              <CafeRow
                area="新宿区"
                cafes={cafeShopsInSpecificArea("新宿区")}
                isLoading={isLoading}
              />
              <CafeRow
                area="千代田区"
                cafes={cafeShopsInSpecificArea("千代田区")}
                isLoading={isLoading}
              />
              <CafeRow
                area="渋谷区"
                cafes={cafeShopsInSpecificArea("渋谷区")}
                isLoading={isLoading}
              />
            </>
          )}
          {showsCreateModal && (
            <CafePostModal
              handleModalClose={closeCreateCafeModal}
              showModal={showsCreateModal}
            />
          )}
        </Suspense>
      </CafeListContext.Provider>
    </>
  );
};

export default ShopsList;
