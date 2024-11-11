import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

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
        <TextField
          size="small"
          variant="outlined"
          placeholder="Type area..."
          onChange={(e) => setKeyword(e.target.value)}
          sx={{ backgroundColor: "#fff", width: 150, borderRadius: "12px" }}
        />
        <Link href={`/en/search?location=${keyword}`}>🔍</Link>
      </Stack>
    </>
  );
};

export default SearchBar;
