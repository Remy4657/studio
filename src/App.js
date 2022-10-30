import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
