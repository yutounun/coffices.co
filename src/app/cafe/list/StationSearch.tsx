import React, { useState } from "react";
import SearchIcon from "../../../../node_modules/@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  Stack,
  TextField,
} from "../../../../node_modules/@mui/material/index";
import Stations from "../../json/stations.json";

interface propTypes {
  filterByStationName: (stationName: string) => void;
}

const StationSearch = ({ filterByStationName }: propTypes) => {
  const [stationName, setStationName] = useState("");

  const handleAutocompleteChange = (event: any, newValue: string) => {
    setStationName(newValue);
  };

  function onClickSearch() {
    filterByStationName(stationName);
  }

  return (
    <Stack
      direction="row"
      sx={{
        width: "25%",
        mb: "2em",
        alignItems: "center",
        height: "2.5em",
        ml: "10px",
      }}
    >
      <Autocomplete
        size="small"
        onChange={handleAutocompleteChange}
        sx={{ width: "100%" }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={Stations.map((station) => station.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={handleAutocompleteChange}
            label="駅名"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "100%",
          width: "2.9em",
          borderRadius: "0 4px 4px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchIcon
          style={{ fill: "white" }}
          sx={{ cursor: "pointer" }}
          onClick={onClickSearch}
        />
      </Box>
    </Stack>
  );
};

export default StationSearch;
