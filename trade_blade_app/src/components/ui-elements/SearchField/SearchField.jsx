import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { style } from "./SearchField_style";

export const SearchField = ({ placeholder, buttonText }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Box sx={style.searchWrapper}>
      <TextField
        sx={style.searchField}
        variant="outlined"
        placeholder={placeholder}
        fullWidth
        size="small"
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {}}
        sx={style.searchButton}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
