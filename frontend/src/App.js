import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TemplesList from "./pages/TemplesList";
import TempleDetail from "./pages/TempleDetail";
import SpiritualPlaces from "./pages/SpiritualPlaces";
import PlanYourVisit from "./pages/PlanYourVisit";
import Festivals from "./pages/Festivals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temples" element={<TemplesList />} />
            <Route path="/temples/:id" element={<TempleDetail />} />
            <Route path="/spiritual-places" element={<SpiritualPlaces />} />
            <Route path="/plan-your-visit" element={<PlanYourVisit />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;