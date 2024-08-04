"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Autocomplete } from "@mui/material";
import { styled } from "@mui/system";
import stationsArea from "@/data/stationsArea.json";
import { useRouter, useSearchParams } from "next/navigation";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "50px",
    backgroundColor: "white",
    width: "100%",
    paddingRight: "1.2em !important", // Force reset the padding-right
  },
  "& .MuiInputAdornment-root": {
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  "& .MuiInputBase-input": {
    padding: "10px 0",
  },
}));

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: "100%",
  "& .MuiAutocomplete-inputRoot": {
    borderRadius: "50px",
    backgroundColor: "white",
    padding: "0 0.7em 0 1em",
    "&.MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-root, &.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root":
      {
        paddingRight: "0px", // Reset the padding-right
      },
  },
  "& .MuiAutocomplete-endAdornment": {
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  "& .MuiInputBase-input": {
    padding: "10px 0",
  },
}));

interface propTypes {
  sx?: Object;
}

const SearchBar = ({ sx }: propTypes) => {
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q");
    if (!q) setInputValue("");
  }, [searchParams]);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKeyword(event.target.value);
  };

  const onClickSearch = () => {
    router.push(`/cafe/list?q=${keyword}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <CustomAutocomplete
      freeSolo
      options={stationsArea.map((station) => station.name)}
      inputValue={inputValue}
      sx={{ width: "30%", ...sx }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        setKeyword(newInputValue);
      }}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          sx={{ ...sx }}
          variant="outlined"
          placeholder="Type area, station..."
          onChange={handleTextFieldChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon onClick={onClickSearch} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchBar;
