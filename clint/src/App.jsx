import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Travels from "./pages/Travels";
import Hotels from "./pages/Hotels";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/travel" element={<Travels />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </>
  );
}

export default App;
