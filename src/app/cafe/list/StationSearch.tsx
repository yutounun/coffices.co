import React, { useState } from "react";
import SearchIcon from "../../../../node_modules/@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  Stack,
  TextField,
} from "../../../../node_modules/@mui/material/index";
import Stations from "./stations.json";

const StationSearch = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleAutocompleteChange = (event: any, newValue: string) => {
    setSelectedValue(newValue);
  };

  function onClickSearch() {
    console.log(selectedValue);
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
