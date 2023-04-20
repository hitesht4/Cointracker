import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coin" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
