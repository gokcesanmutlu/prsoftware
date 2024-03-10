import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PressPage from "./pages/PressPage";
import CareerPage from "./pages/CareerPage";
import Legal from "./components/Legal";
import Help from "./pages/Help";
import Pricing from "./pages/Pricing";
import PrivacyPage from "./pages/PrivacyPage";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepSuccess from "./pages/StepSuccess";
import PrivacyModal from "./components/PrivacyModal";
import Footer from "./components/Footer";

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
