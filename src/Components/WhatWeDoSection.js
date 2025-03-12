import React from "react";
import dottedRight from "../assets/images/dotted-right.webp";
import womanTyping from "../assets/images/woman-typing.webp";
import Button from "./Button";

export default function WhatWeDoSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white">
      {/* Outer Container */}
      <div className="w-[85%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side (Text) */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h3 className="text-2xl font-semibold text-black font-poppins">What we do</h3>
          <h2 className="text-4xl font-semibold text-black mt-6 leading-tight font-poppins">
            Data-driven B2B Marketing from Strategy to Execution
          </h2>
          <p className="text-base font-normal text-gray-600 mt-8 font-poppins opacity-80">
            Get a world-class marketing strategy, and a scale-to-market team to
            help you execute that strategy to get you to your revenue targets
            faster.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button variant="primary" className="mt-10">
              How We Work
            </Button>
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="hidden md:block w-[45%] relative aspect-[7/6]">
          {/* Background Dotted Image (top-right corner) */}
          <img
            src={dottedRight}
            alt="Dotted Background"
            className="absolute top-0 right-0 w-[85%]"
          />
          {/* Foreground Image (bottom-left corner, slightly overlapping) */}
          <img
            src={womanTyping}
            alt="Woman Typing"
            className="absolute bottom-0 left-0 w-[85%]"
          />
        </div>
      </div>
    </section>
  );
}