"use client";
import { useEffect, useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import usePlacesAutocomplete from "use-places-autocomplete";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const router = useRouter();
  const [libraryLoaded, setLibraryLoaded] = useState(false);

  useEffect(() => {
    // If the library is not loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_ADDRESS_CHECK_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => setLibraryLoaded(true);
      document.body.appendChild(script);
    } else {
      setLibraryLoaded(true); // すでにロード済み
    }
  }, []);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300, // オプション: 入力遅延
  });

  const handleSearch = (location: string) => {
    if (location.trim()) {
      clearSuggestions();
      router.push(`/en/search?location=${encodeURIComponent(location.trim())}`);
    }
  };

  const handleOptionSelect = (event: any, newValue: string | null) => {
    if (newValue) {
      setValue(newValue, false);
      handleSearch(newValue);
    }
  };

  if (!libraryLoaded) return null; // ライブラリがロードされていない間は何も表示しない

  return (
    <Stack
      direction="row"
      sx={{
        gap: 1,
        alignItems: "center",
        borderRadius: "12px",
      }}
    >
      <Autocomplete
        disablePortal
        freeSolo
        value={value}
        onInputChange={(event, newValue) => setValue(newValue)}
        onChange={handleOptionSelect}
        options={status === "OK" ? data.map((place) => place.description) : []}
        disabled={!ready}
        sx={{ width: 200, bgcolor: "white", borderRadius: "12px" }}
        size="small"
        renderInput={(params) => (
          <TextField {...params} label="Search for areas" variant="outlined" />
        )}
      />
      <div
        onClick={() => handleSearch(value)}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <SearchIcon fontSize="small" sx={{ color: "white" }} />
      </div>
    </Stack>
  );
};

export default SearchBar;
