import React from "react";
import Button from "./Button";

// Importing logos in reverse order
import terra15 from "../assets/images/terra15.png";
import primary_horizontal from "../assets/images/primary_horizontal.png";
import the_leaf from "../assets/images/the_leaf.png";
import retreats from "../assets/images/retreats.png";
import bottoms_up from "../assets/images/bottoms_up.png";
import cleartrip from "../assets/images/cleartrip.png";
import flydubai from "../assets/images/flydubai.png";
import ifeelgood from "../assets/images/ifeelgood.png";
import move_with_us from "../assets/images/move_with_us.png";
import viewpoint from "../assets/images/viewpoint.png";
import clinic27 from "../assets/images/clinic27.png";
import complete_chiropractic from "../assets/images/complete_chiropractic.png";
import guy from "../assets/images/guy.png";
import prd_survey from "../assets/images/prd_survey.png";

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