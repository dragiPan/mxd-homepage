import React from "react";
import Button from "./Button";
import iceberg from "../assets/images/iceberg.webp";
import dataWave from "../assets/images/dotted-waves.webp";

export default function OurApproachSection() {
  return (
    <section className="relative w-full min-w-full bg-neutral-900 text-white overflow-x-hidden">
      {/* Big Title: Our Approach */}
      <h2
        className="absolute left-0 top-0 w-screen text-center font-semibold font-poppins pointer-events-none select-none opacity-10 leading-[1] whitespace-nowrap overflow-hidden"
        style={{
          fontSize: "clamp(40px, 12vw, 250px)",
        }}
      >
        Our Approach
      </h2>

      {/* Content Row */}
      <div className="relative w-full px-[8%] mx-auto z-10 mt-[17vh] flex flex-col lg:flex-row items-start justify-between">
        {/* Left: Text Container */}
        <div className="w-full lg:w-[45%] space-y-8 mb-16 lg:mb-0 pb-32 text-center lg:text-left">
          <h3 className="text-4xl lg:text-5xl font-semibold font-poppins leading-tight">
            Data-Driven Decision-<br className="hidden lg:block" />making for B2B marketing.
          </h3>
          <p className="text-base leading-relaxed font-normal font-poppins opacity-80">
            Our data-first approach allows us to take small, and growing
            businesses, and have them compete with competitors significantly
            bigger. Our marketing strategy counselling, data hub, and execution
            teams provide clear, actionable strategies to increase revenue, with
            a go-to-market and execution team to support.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button variant="primary">
              How We Work
            </Button>
          </div>
        </div>

        {/* Right: Iceberg Image */}
        <div className="w-full lg:w-[50%] lg:ml-8 lg:mt-[10%] order-first lg:order-last mb-8 lg:mb-0 relative">
          <div 
            className="relative" 
            style={{ 
              overflow: "hidden"
            }}
          >
            {/* Main image with radial transparency mask */}
            <img
              src={iceberg}
              alt="Iceberg"
              className="w-full h-auto object-contain"
              style={{
                maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
                WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)"
              }}
            />
          </div>
        </div>
      </div>

      {/* Second Section: Data Visualization and Insight Box */}
      <div className="relative w-full px-[5%] mx-auto z-10 pt-8 pb-32">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold font-poppins mb-4">
            Powered by Data
          </h2>
          <p className="text-xl lg:text-2xl font-normal font-poppins leading-relaxed mx-auto">
            We create your companies digital marketing 'Big Brain' <br className="hidden lg:block" />
            to ingest <span className="italic">all</span> data for predictable revenue growth
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left: Data Wave Image */}
          <div className="w-full lg:w-[60%]">
            <img
              src={dataWave}
              alt="Data Visualization"
              className="w-full h-auto object-cover rounded-xl filter grayscale"
            />
          </div>

          {/* Right: Marketing Insight Box */}
          <div className="bg-[#496BEF] text-white rounded-xl p-6 lg:p-8 w-full lg:w-[55%] flex flex-col items-start justify-between shadow-lg lg:absolute lg:right-0 lg:bottom-[-10%] lg:-ml-[5%] mt-8 lg:mt-0">
            <p className="text-base leading-relaxed font-normal font-poppins opacity-80 mb-8">
              Marketing in today's world is a science. We create your personalised data
              centre that allows you to understand how your marketing efforts are
              translating into revenue.
            </p>
            <Button variant="dataMarketing">
              Data Driving B2B <br className="sm:hidden" /> Marketing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
