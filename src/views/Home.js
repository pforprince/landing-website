import React from "react";
import AppAbout from "../components/home/About";
import AppContact from "../components/home/Contact";
import AppFAQ from "../components/home/FAQ";
import AppFeatures from "../components/home/Features";
import AppHero from "../components/home/Hero";
import AppPricing from "../components/home/Pricing";
import AppWork from "../components/home/Work";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWork />
      <AppFAQ />
      <AppPricing />
      <AppContact />
    </div>
  );
}

export default AppHome;
