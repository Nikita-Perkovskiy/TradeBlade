import { Button } from "@mui/material";
import React from "react";
import { style } from "./MainButton.styled";

export const MainButton = ({ buttonContent }) => {
  return (
    <>
      <Button sx={style.buttonWrapper} variant="contained" disableElevation>
        {buttonContent}
      </Button>
    </>
  );
};
