import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import Stations from "@/data/stations.json";
import useTranslate from "@/hooks/useTranslate";

interface propTypes {
  filterByStationName: (stationName: string) => void;
}

const StationSearch = ({ filterByStationName }: propTypes) => {
  const [stationName, setStationName] = useState("");
  const { t } = useTranslate();

  const handleAutocompleteChange = (_: any, value: string | null) => {
    if (value) setStationName(value); // Autocomplete からの値
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStationName(event.target.value); // TextField からの値
  };

  function onClickSearch() {
    filterByStationName(stationName);
  }

  return (
    <Stack
      direction="row"
      sx={{
        width: { xs: "80%", sm: "25%" },
        alignItems: "center",
        height: "2.5em",
        ml: { xs: "2em", sm: "5em" },
        mb: { xs: "1em", sm: "0" },
        backgroundColor: "white",
        borderRadius: "4px",
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
            onChange={handleTextFieldChange} // TextField 用の別の関数
            label={t?.header.stationName}
            sx={{
              "& .MuiInputLabel-outlined": {
                color: "secondary.main",
              },
              "& .MuiInputLabel-outlined.Mui-focused": {
                color: "secondary.main",
              },
              "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
                color: "secondary.main",
              },
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Box
        sx={{
          backgroundColor: "custom.gray",
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
