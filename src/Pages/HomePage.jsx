import React from "react";
import HeroSection from "../components/HeroSection";
import Appbar from "../components/Appbar";
import Profile from "../components/Profile";
import Achievements from "../components/Achievements";
import MacbookDisplay from "../components/MacbookDisplay";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Appbar />
      <HeroSection />
      <Profile />
      <MacbookDisplay />
    </div>
  );
};

export default HomePage;
