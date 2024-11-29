"use client";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import usePlacesAutocomplete from "use-places-autocomplete";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const router = useRouter();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

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
