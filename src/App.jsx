import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PressPage from "./pages/PressPage";
import CareerPage from "./pages/CareerPage";
import AboutPage from "./pages/AboutPage";
import Help from "./pages/Help";
import Legal from "./components/Legal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepSuccess from "./pages/StepSuccess";
import Pricing from "./pages/Pricing";
import PrivacyModal from "./components/PrivacyModal";
import PrivacyPage from "./pages/PrivacyPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact/step1" element={<StepOne />} />
          <Route path="/contact/step2" element={<StepTwo />} />
          <Route path="/contact/step3" element={<StepSuccess />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/modal" element={<PrivacyModal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
