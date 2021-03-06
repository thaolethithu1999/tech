import React from "react";
import AppAbout from "../home/About";
import AppContact from "../home/Contact";
import AppFaq from "../home/Faq";
import AppFeature from "../home/Feature";
import AppHero from "../home/Hero";
import AppPricing from "../home/Pricing";
import AppWorks from "../home/Works";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
      <AppPricing />
      <AppContact />
    </div>
  );
};

export default AppHome;
