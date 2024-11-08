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
import OurClientsLove from "@/components/OurClientsLove";
import Industries from "@/components/Industries";
import BlogSection from "@/components/BlogsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ChatWithWhatsapp from "@/components/Chatwithwhatsapp";

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
    <ChatWithWhatsapp/>
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
    <OurClientsLove/>
    <Industries/>
    <BlogSection/>
    <CallToAction/>
    <Footer/>
    </>
  )
}