import { Header } from "./components/blocks/Header/Header.jsx";
import "./App.css";
import { MainInfo } from "./components/blocks/MainInfo/MainInfo.jsx";
import { StatisticBlock } from "./components/blocks/StatisticBlock/StatisticBlock.jsx";

function App() {
  return (
    <>
      <Header />
      <MainInfo />
      <StatisticBlock />
    </>
  );
}

export default App;
