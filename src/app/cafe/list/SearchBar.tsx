"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "50px",
    backgroundColor: "white",
    padding: "0 0.7em 0 1em",
  },
  "& .MuiInputAdornment-root": {
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  "& .MuiInputBase-input": {
    padding: "10px 0",
  },
}));

interface propTypes {
  filterByStationName: (stationName: string) => void;
  sx: Object;
}

const SearchBar = ({ filterByStationName, sx }: propTypes) => {
  const [stationName, setStationName] = useState("");

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStationName(event.target.value);
  };

  const onClickSearch = () => {
    filterByStationName(stationName);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <CustomTextField
      sx={sx}
      variant="outlined"
      placeholder="Type area, station..."
      onChange={handleTextFieldChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon onClick={onClickSearch} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
