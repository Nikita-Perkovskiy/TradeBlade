import { Grid2 } from "@mui/material";
import React from "react";
import { style } from "./StatisticBlock_styled";

export const StatisticBlock = () => {
  return (
    <Grid2 container>
      <Grid2 container gap={0} sx={style.decorationBlock}>
        <Grid2 size="5"></Grid2>
        <Grid2 size="7"></Grid2>
      </Grid2>
    </Grid2>
  );
};
