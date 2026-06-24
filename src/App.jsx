import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Pentakuhl from "./pages/Pentakuhl";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pentakuhl" element={<Pentakuhl />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;