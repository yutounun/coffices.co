import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <Stack
        direction="row"
        sx={{
          gap: 2,
          alignItems: "center",
          height: 30,
          borderRadius: "12px",
        }}
      >
        <input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
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
        <Link
          href={`/en/search?location=${keyword}`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <SearchIcon
            fontSize="small"
            sx={{ cursor: "pointer", color: "white" }}
          />
        </Link>
      </Stack>
    </>
  );
};

export default SearchBar;
