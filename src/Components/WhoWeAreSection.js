import React from "react";
import dottedLeft from "../assets/images/dotted-left.png";
import meeting from "../assets/images/Meeting.png";
import Button from "./Button";

export default function WhoWeAreSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white">
      {/* Outer Container */}
      <div className="w-[85%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side (Images) */}
        <div className="hidden md:block w-[45%] relative aspect-[7/6] flex-shrink-0">
          {/* Background Dotted Image (top-left corner) */}
          <img
            src={dottedLeft}
            alt="Dotted Background"
            className="absolute top-0 left-0 w-[85%]"
          />
          {/* Foreground Image (bottom-right corner) */}
          <img
            src={meeting}
            alt="Meeting"
            className="absolute bottom-0 right-0 w-[85%]"
          />
        </div>

        {/* Right Side (Text) */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h3 className="text-2xl font-semibold text-black font-poppins">Who we are</h3>
          <h2 className="text-4xl font-semibold text-black mt-6 leading-tight font-poppins">
            Scale Quicker
          </h2>
          <p className="text-base font-normal text-gray-600 mt-8 font-poppins opacity-80">
            We're a full-service agency that supports your business to grow,
            drive high-quality leads, and support your sales team to convert
            those leads to supersede your revenue targets.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button variant="primary" className="mt-10">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
