import { style } from "./Header_styles";
import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../../assets/svg/Icon_logo.svg";
import { ReactComponent as LogoText } from "../../../assets/svg/logo_text.svg";
import {
  AppBar,
  Toolbar,
  Grid2,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MainButton } from "../../ui-elements/MainButton/MainButton";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    "Цифры",
    "Сделки онлайн",
    "О компании",
    "Как начать",
    "Тарифы",
    "Отзывы",
    "FAQ",
  ];

  return (
    <AppBar position="static" sx={style.headerWrapper}>
      <Toolbar>
        <Grid2
          container
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid2>
            <Grid2 container alignItems="center">
              <LogoIcon />
              <LogoText />
            </Grid2>
          </Grid2>
          {!isMobile && (
            <Grid2>
              <Grid2 container spacing={4}>
                {navItems.map((item) => (
                  <Grid2 key={item}>
                    <span style={style.navTex}>{item}</span>
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          )}
          {!isMobile && (
            <Grid2>
              <Grid2 container spacing={1}>
                <Grid2>
                  <Button
                    sx={style.entryButton}
                    variant="contained"
                    disableElevation
                  >
                    Вход
                  </Button>
                </Grid2>
                <Grid2 sx={style.buttonBox}>
                  <MainButton buttonContent={"Регистрация"} />
                </Grid2>
              </Grid2>
            </Grid2>
          )}
          {isMobile && (
            <Grid2>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid2>
          )}
        </Grid2>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={style.drawerWrapper}
      >
        <IconButton sx={style.deleteIcon} onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
        <List sx={style.drawerListBlock}>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <ListItemText style={style.navTex} primary={item} />
            </ListItem>
          ))}
        </List>
        <Grid2>
          <Grid2 container spacing={1} sx={style.drawerButtonBlock}>
            <Grid2 size={6}>
              <Button
                sx={style.entryButton}
                variant="contained"
                disableElevation
              >
                Вход
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <MainButton buttonContent={"Регистрация"} />
            </Grid2>
          </Grid2>
        </Grid2>
      </Drawer>
    </AppBar>
  );
};
