import { Grid2, Typography } from "@mui/material";
import React from "react";
import { style } from "./MainInfo_styled.js";
import { ReactComponent as InfoBanner } from "../../../assets/svg/Info_banner.svg";
import { SearchField } from "../../ui-elements/SearchField/SearchField.jsx";
import BannerImage from "../../../assets/img/image1.jpg";

export const MainInfo = () => {
  return (
    <Grid2
      sx={style.mainInfoWrapper}
      justifyContent={"center"}
      container
      spacing={1}
    >
      <Grid2 xs={12} md={5} order={{ xs: 2, md: 1 }}>
        <Grid2 container gap={1.5} flexDirection={"column"}>
          <Grid2>
            <Typography variant="h2" sx={style.mainInfoSlogo}>
              моментально Копируй сделки профи трейдеров
            </Typography>
          </Grid2>
          <Grid2 sx={style.mainInfoTextWrapper}>
            <Typography variant="p" sx={style.mainInfoText}>
              Начни копировать сделки с успешной командой профессиональных
              трейдеров в автоматическом режим.
            </Typography>
          </Grid2>
          <Grid2 sx={style.mainInfoFieldWrapper}>
            <SearchField placeholder={"Ваш e–mai"} buttonText={"Начать"} />
          </Grid2>
          <Grid2>
            <Typography sx={style.mainInfoComment} variant="p">
              5 дней бесплатного пользования
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 xs={12} md={5} order={{ xs: 1, md: 2 }}>
        <Grid2 container justifyContent={"center"} alignItems={"center"}>
          <InfoBanner />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
