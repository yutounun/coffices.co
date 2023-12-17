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

  function cafeShopsInSpecificArea(stations: string[]) {
    return cafeList?.filter((cafe) => {
      for (const station of stations) {
        return cafe.station === station;
      }
    });
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
                area={stationName ? stationName : "東京都の作業カフェTOP20"}
                cafes={cafeList}
                isLoading={isLoading}
              />
              <CafeRow
                area="目黒・代官山エリア"
                cafes={cafeShopsInSpecificArea(["目黒駅", "代官山駅"])}
                isLoading={isLoading}
              />
              <CafeRow
                area="吉祥寺エリア"
                cafes={cafeShopsInSpecificArea(["吉祥寺駅"])}
                isLoading={isLoading}
              />
              <CafeRow
                area="代々木エリア"
                cafes={cafeShopsInSpecificArea([
                  "代々木駅",
                  "代々木上原駅",
                  "代々木八幡駅",
                ])}
                isLoading={isLoading}
              />
              <CafeRow
                area="渋谷エリア"
                cafes={cafeShopsInSpecificArea(["神泉駅", "渋谷駅"])}
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
