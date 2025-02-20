import { height } from "@mui/system";
import {
  BASE_BLACK,
  BASE_BLUE,
  BASE_WHITE,
  DARK_BLUE,
} from "../../../assets/constants/colors";

export const style = {
  searchWrapper: {
    width: "100%",
    height: "60px",
    padding: "3px",
    borderRadius: "4px",
    backgroundColor: DARK_BLUE,
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  searchField: {
    "& .MuiInputBase-input::placeholder": {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: BASE_WHITE,
      opacity: 1,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  },
  searchButton: {
    height: "100%",
    backgroundColor: BASE_BLUE,
    color: BASE_BLACK,
    borderRadius: "4px",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
  },
};
