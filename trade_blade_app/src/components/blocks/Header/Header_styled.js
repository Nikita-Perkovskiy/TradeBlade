import {
  BASE_BLACK,
  BASE_BLUE,
  BASE_PURPLE,
  BASE_WHITE,
} from "../../../assets/constants/colors";

export const style = {
  headerWrapper: {
    paddingLeft: "24px",
    paddingRight: "24px",
    backgroundColor: BASE_BLACK,
  },
  navTex: {
    cursor: "pointer",
    color: BASE_WHITE,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  entryButton: {
    width: "100%",
    height: "42px",
    borderRadius: "3px",
    backgroundColor: BASE_PURPLE,
    color: BASE_BLUE,
    cursor: "pointer",
    fontWeight: "500",
    textTransform: "uppercase",
    border: `2px solid ${BASE_BLUE}`,
  },
  drawerWrapper: {
    "& .MuiDrawer-paper": {
      width: "100%",
      backgroundColor: BASE_PURPLE,
    },
  },
  drawerButtonBlock: {
    width: "100%",
    padding: "0px 14px 0px 14px",
    gap: "6px",
  },
  drawerListBlock: {
    paddingTop: "40px",
  },
  deleteIcon: { position: "absolute", top: 16, right: 16, color: BASE_WHITE },
};
