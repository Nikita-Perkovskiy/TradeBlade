import { Header } from "./components/blocks/Header/Header.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'IBM Plex Sans', sans-serif",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>{<Header />}</ThemeProvider>
    </div>
  );
}

export default App;
