import React from "react";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import OurJourney from "@/components/OurJourney";
import Autoplayslider from "@/components/AutoPlayCarousel";
import AwardsAndRecognitions from "@/components/AwardsRecognition";
import TechnologyWiseUse from "@/components/TechnologyWiseUse";
import TabsSection from "@/components/Tabs";
import CreateSoftwareSection from "@/components/CreateSoftwaresection";
import SuccessStories from "@/components/OurSuccessStories";
import OurProductDevelopmentProcess from "@/components/OurProductDevelopmentProcess";

export default function Home(){
  const companyNames = [
    "Android",
    "IOS",
    "UX Design",
    "Web Design",
    "SOftware Development",
  ];
  return(
    <>
    <Header/>
    <Herosection/>
    <OurJourney/>
    <Autoplayslider companyNames={companyNames}/>
    <AwardsAndRecognitions/>
    <TechnologyWiseUse/>
    <TabsSection/>
    <CreateSoftwareSection/>
    <SuccessStories/>
    <OurProductDevelopmentProcess/>
    {/* <OurProductDevelopmentProcess/> */}
    </>
  )
}