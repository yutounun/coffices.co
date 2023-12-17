import { createContext, Dispatch, SetStateAction } from "react";

export interface StationNameContextType {
  stationName: string;
  setStationName: Dispatch<SetStateAction<string>>;
}

export const StationNameContext = createContext<StationNameContextType>({
  stationName: "",
  setStationName: () => {},
});
