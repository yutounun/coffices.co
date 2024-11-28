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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter" && keyword.trim()) {
      setSearchKeyword(keyword.trim());
      router.push(`/en/search?location=${encodeURIComponent(keyword.trim())}`);
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
      <a
        href={`/en/search?location=${encodeURIComponent(keyword.trim())}`}
        style={{ display: "flex", alignItems: "center" }}
      >
        <SearchIcon
          fontSize="small"
          sx={{ cursor: "pointer", color: "white" }}
        />
      </a>
    </Stack>
  );
};

export default SearchBar;
