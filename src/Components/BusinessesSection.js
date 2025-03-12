import React from "react";
import Button from "./Button";
import leftArrow from "../assets/images/left_arrow.svg";

// Importing logos in reverse order
import terra15 from "../assets/images/terra15.webp";
import primary_horizontal from "../assets/images/primary_horizontal.webp";
import the_leaf from "../assets/images/the_leaf.webp";
import retreats from "../assets/images/retreats.webp";
import bottoms_up from "../assets/images/bottoms_up.webp";
import cleartrip from "../assets/images/cleartrip.webp";
import flydubai from "../assets/images/flydubai.webp";
import ifeelgood from "../assets/images/ifeelgood.webp";
import move_with_us from "../assets/images/move_with_us.webp";
import viewpoint from "../assets/images/viewpoint.webp";
import clinic27 from "../assets/images/clinic27.webp";
import complete_chiropractic from "../assets/images/complete_chiropractic.webp";
import guy from "../assets/images/guy.webp";
import prd_survey from "../assets/images/prd_survey.webp";

const logos = [
  prd_survey,
  guy,
  complete_chiropractic,
  clinic27,
  viewpoint,
  move_with_us,
  ifeelgood,
  flydubai,
  cleartrip,
  bottoms_up,
  retreats,
  the_leaf,
  primary_horizontal,
  terra15,
];

export default function BusinessesSection() {
  return (
    <section className="relative w-full bg-white text-black py-24 text-center overflow-hidden">
      {/* Section Title */}
      <h2 className="text-[25px] font-semibold font-poppins mb-10 px-[8%]">
        We help businesses like yours grow revenue profitability
      </h2>

      {/* Logo Carousel */}
      <div className="logos w-full overflow-hidden py-6 bg-white whitespace-nowrap relative">
        <div className="logos-slide inline-block animate-[slide_35s_linear_infinite]">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-[60px] mx-10 object-contain grayscale inline-block"
            />
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-10 px-[8%]">
        <Button variant="black">How We Work</Button>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </section>
  );
}