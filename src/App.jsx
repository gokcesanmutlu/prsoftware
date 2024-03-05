import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import PressPage from "./pages/PressPage";
import CareerPage from "./pages/CareerPage";
import AboutPage from "./pages/AboutPage";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Legal from "./components/Legal";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
