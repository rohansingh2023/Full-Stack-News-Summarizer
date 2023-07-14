import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Summarizer from "./pages/Summarizer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/summarizer" element={<Summarizer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
