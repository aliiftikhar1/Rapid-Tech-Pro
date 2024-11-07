'use client'
    import { motion, useTransform, useScroll } from "framer-motion";
    import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
    
    const OurProductDevelopmentProcess = () => {
      return (
        <div className="bg-neutral-800">
          <div className=" h-48 pl-20 pt-10 font-[600] text-5xl">
           <h1 className="text-white">
            Our Product
           </h1>
           
           <h1 className="text-bluish">
            Development Process
           </h1>

           <p className="flex text-white text-xl font-[500] items-center gap-2 mt-4">View More <FaArrowRight/></p>
          </div>
          <HorizontalScrollCarousel />
          {/* <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-500">
              Scroll up
            </span>
          </div> */}
        </div>
      );
    };
    
    const HorizontalScrollCarousel = () => {
      const targetRef = useRef(null);
      const { scrollYProgress } = useScroll({
        target: targetRef,
      });
    
      const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);
    
      return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 w-full">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex h-full">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </section>
      );
    };
    
    const Card = ({ card }) => {
      return (
        <div
          key={card.id}
          className="group relative h-[550px] w-[1350px] overflow-hidden bg-neutral-200"
        >
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div className="absolute inset-0 z-10 grid place-content-center">
            <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
              {card.title}
            </p>
          </div>
        </div>
      );
    };
    
    export default OurProductDevelopmentProcess;
    
    const cards = [
      {
        url: "/images/herosection.png",
        title: "Title 1",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 1,
      },
      {
        url: "/images/herosection.png",
        title: "Title 2",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 2,
      },
      {
        url: "/images/herosection.png",
        title: "Title 3",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 3,
      },
      {
        url: "/images/herosection.png",
        title: "Title 4",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 4,
      },
      {
        url: "/images/herosection.png",
        title: "Title 5",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 5,
      },
      {
        url: "/images/herosection.png",
        title: "Title 6",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 6,
      },
      {
        url: "/images/herosection.png",
        title: "Title 7",
        description: "This is my own description.",
        date:"1/2/2024",
        id: 7,
      },
    ];