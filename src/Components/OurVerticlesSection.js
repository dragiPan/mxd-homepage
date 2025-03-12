import React, { useState, useEffect } from "react";
import leftArrow from "../assets/images/left_arrow.svg";
import rightArrow from "../assets/images/right_arrow.svg";
import womanHeadset from "../assets/images/woman_headset.webp";
import baker from "../assets/images/baker.webp";
import runner from "../assets/images/runner.webp";

const colors = [
  { image: "#BEBEBE", text: "#D9D9D9" },
  { image: "#3351C9", text: "#496BEF" },
  { image: "#000000", text: "#000000" },
  { image: "#E6E6E6", text: "#FFFFFF" }
];
const placeholders = new Array(12).fill(null);

const initialSlides = [
  { img: womanHeadset, title: "Direct to Consumer", desc: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.", bg: colors[0], link: "#" },
  { img: baker, title: "B2B Marketing", desc: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.", bg: colors[1], link: "#" },
  { img: runner, title: "Consumer Services", desc: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.", bg: colors[2], link: "#" },
  ...placeholders.map((_, index) => ({
    img: null,
    title: "Lorem Ipsum",
    desc: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bg: colors[(index + 3) % colors.length],
    link: "#",
  })),
];

export default function OurVerticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1536) setVisibleSlides(5);
      else if (window.innerWidth >= 1280) setVisibleSlides(4);
      else if (window.innerWidth >= 1024) setVisibleSlides(3);
      else if (window.innerWidth >= 768) setVisibleSlides(2);
      else setVisibleSlides(1);
    };
    
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = initialSlides.length - visibleSlides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section className="relative w-full bg-white text-black py-16 px-[5%]">
      <div className="max-w-[1600px] mx-auto">
        {/* Title & Description */}
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-[55px] font-semibold font-poppins">Our Verticles</h2>
          <p className="text-[16px] font-normal font-poppins leading-relaxed max-w-[800px]">
            Our team of highly specialized B2B marketing experts — performance marketing, search engine optimization,
            lead generation, conversion rate optimization, brand and content ensures that you get the results you want – more revenue.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end gap-4 mb-4">
          <button onClick={prevSlide} className="w-10 h-10">
            <img src={leftArrow} alt="Previous" className="w-full h-full object-contain" />
          </button>
          <button onClick={nextSlide} className="w-10 h-10">
            <img src={rightArrow} alt="Next" className="w-full h-full object-contain" />
          </button>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {initialSlides.map((slide, index) => (
              <a 
                key={index} 
                href={slide.link} 
                className={`${
                  visibleSlides === 1 ? 'w-full' : 
                  visibleSlides === 2 ? 'w-1/2' : 
                  visibleSlides === 3 ? 'w-1/3' : 
                  visibleSlides === 4 ? 'w-1/4' : 
                  'w-1/5'
                } flex-shrink-0 flex-grow-0 block h-[420px] flex flex-col justify-between`}
              >                
                <div
                  className="w-full h-[230px] rounded-t-lg overflow-hidden"
                  style={{ 
                    backgroundColor: slide.img ? slide.bg.text : slide.bg.image, 
                    borderBottomLeftRadius: "0", 
                    borderBottomRightRadius: "0" 
                  }}
                >
                  {slide.img && <img src={slide.img} alt={slide.title} className="w-full h-full object-cover rounded-t-lg" />}
                </div>
                <div
                  className="py-8 px-6 rounded-b-lg flex flex-col justify-center h-[190px]"
                  style={{ 
                    backgroundColor: slide.bg.text, 
                    borderTopLeftRadius: "0", 
                    borderTopRightRadius: "0", 
                    color: (slide.bg.text === "#000000" || slide.bg.text === "#496BEF") ? "#FFFFFF" : "#000000" 
                  }}
                >
                  <h3 className="text-[25px] font-medium font-poppins mb-2 text-left">{slide.title}</h3>
                  <p className="text-[16px] font-normal font-poppins text-left leading-snug">{slide.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}