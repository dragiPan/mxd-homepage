import React from "react";
import whale from "../assets/images/whale.png";

export default function ScalingSection() {
  return (
    <section className="relative w-full text-white py-32 px-[8%] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={whale}
          alt="Whale"
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-[55px] font-semibold font-poppins mb-16">
          Why scaling businesses choose MxD
        </h2>

        {/* Info Rows */}
        <div className="relative flex flex-col space-y-20 text-left lg:text-left lg:w-full md:w-[65%] md:mx-auto sm:w-[65%] sm:mx-auto text-center">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="max-w-[80%]">
              <h3 className="text-[45px] font-semibold font-poppins">
                Teams of expert under one roof
              </h3>
              <p className="text-[16px] font-normal font-poppins opacity-80 max-w-lg mx-auto lg:mx-0">
                We offer comprehensive marketing support from strategy to execution.
                Make decisions with a clear picture of your growth—where it is today
                and where it needs to go.
              </p>
            </div>
            <div className="hidden lg:block w-6 h-6 bg-[#496BEF] rounded-full mt-6" />
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="max-w-[80%]">
              <h3 className="text-[45px] font-semibold font-poppins">
                Expertise and dedicated support
              </h3>
              <p className="text-[16px] font-normal font-poppins opacity-80 max-w-lg mx-auto lg:mx-0">
                Get marketing expertise that is focused on helping you reach your goals.
                Get a dedicated MxD marketing team with expertise across industries,
                size, and stage.
              </p>
            </div>
            <div className="hidden lg:block w-6 h-6 bg-[#496BEF] rounded-full mt-6" />
          </div>

          {/* Third Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="max-w-[80%]">
              <h3 className="text-[45px] font-semibold font-poppins">
                A partner that grows with you
              </h3>
              <p className="text-[16px] font-normal font-poppins opacity-80 max-w-lg mx-auto lg:mx-0">
                We match our engagement and level of support to your business needs.
                Whether you're just starting out or scaling quickly, we're here to partner
                with you at every stage of your journey.
              </p>
            </div>
            <div className="hidden lg:block w-6 h-6 bg-[#496BEF] rounded-full mt-6" />
          </div>

          {/* Vertical Line Connecting Dots (Only for lg and above) */}
          <div className="hidden lg:block absolute right-[0.68rem] -top-[2.5rem] h-[calc(100%-160px)] w-[2px] bg-[#496BEF]" />
        </div>
      </div>
    </section>
  );
}
