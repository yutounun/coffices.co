"use client";
import { Stack } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import useSearchKeywordStore from "@/store/searchKeywordStore";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const setSearchKeyword = useSearchKeywordStore(
    (state) => state.setSearchKeyword
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchKeyword(keyword.trim());
      router.push(`/en/search?location=${encodeURIComponent(keyword.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        gap: 1,
        alignItems: "center",
        height: 30,
        borderRadius: "12px",
      }}
    >
      <input
        type="text"
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
        value={keyword}
        placeholder="Search"
        style={{
          border: "none",
          outline: "none",
          padding: "0 0.8em",
          width: "100%",
          height: "80%",
          borderRadius: "12px",
          paddingLeft: "0.5em",
          fontSize: "0.8rem",
        }}
      />
      <div
        onClick={handleSearch}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <SearchIcon fontSize="small" sx={{ color: "white" }} />
      </div>
    </Stack>
  );
};

export default SearchBar;
