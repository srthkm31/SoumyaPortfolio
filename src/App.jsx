import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";
import HomePage from "./Pages/HomePage";
import AboutmePage from "./Pages/AboutmePage";
import ContactMePage from "./Pages/ContactMePage";
import WorksPage from "./Pages/WorksPage";
import Intro from "./components/Intro";

const AppContent = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutmePage />} />
        <Route path="/contactme" element={<ContactMePage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>

      {!introFinished && location.pathname === "/" && (
        <Intro onFinish={() => setIntroFinished(true)}>
          Welcome to My Portfolio
        </Intro>
      )}
    </>
  );
};

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ReactLenis>
  );
};

export default App;
