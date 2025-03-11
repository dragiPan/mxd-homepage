import React from "react";
import Button from "./Button";

export default function OurServicesSection() {
  return (
    <section className="relative w-full bg-white text-black py-16 lg:pt-12 px-[5%]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1600px] mx-auto gap-16">
        {/* Title & Description */}
        <div className="w-full lg:w-[40%] max-w-xl mx-auto lg:mx-0 text-center lg:text-left mb-24 lg:mb-0">
          <h2 className="text-[55px] font-semibold font-poppins mb-16">Our Services</h2>
          <p className="text-[16px] font-normal font-poppins leading-relaxed">
            Our team of highly specialized B2B marketing experts — performance marketing, search engine optimization,
            lead generation, conversion rate optimization, brand and content ensures that you get the results you want – more revenue.
          </p>
        </div>

        {/* Buttons Container */}
        <div className="lg:w-[55%] flex flex-wrap justify-center items-center lg:grid lg:grid-cols-2 [@media(min-width:1467px)]:grid-cols-3 gap-8">
          {/* Row 1 */}
          <div className="flex justify-center">
            <Button variant="black">Strategy</Button>
          </div>
          <div className="flex justify-center">
            <Button variant="secondary">Data & AI</Button>
          </div>
          <div className="flex justify-center">
            <Button variant="primary">B2B Marketing</Button>
          </div>

          {/* Row 2 - with custom breakpoint wrapper */}
          <div className="hidden [@media(min-width:1467px)]:contents">
            <div className="col-span-3 grid grid-cols-3 gap-8">
              <div className="flex justify-center">
                <Button variant="secondary">Go-to-Market Strategy</Button>
              </div>
              <div className="flex justify-center xl:pl-6">
                <Button variant="primary">CMO & Marketing</Button>
              </div>
              <div className="flex justify-center">
                <Button variant="black">Growth Marketing</Button>
              </div>
            </div>
          </div>

          {/* Row 2 - visible below custom breakpoint */}
          <div className="flex justify-center [@media(min-width:1467px)]:hidden">
            <Button variant="secondary">Go-to-Market Strategy</Button>
          </div>
          <div className="flex justify-center [@media(min-width:1467px)]:hidden">
            <Button variant="primary">CMO & Marketing</Button>
          </div>
          <div className="flex justify-center [@media(min-width:1467px)]:hidden">
            <Button variant="black">Growth Marketing</Button>
          </div>

          {/* Row 3 */}
          <div className="flex justify-center">
            <Button variant="black">High Intent Lead</Button>
          </div>
          <div className="flex justify-center">
            <Button variant="secondary">Generation</Button>
          </div>
          <div className="flex justify-center lg:col-span-2 [@media(min-width:1467px)]:col-span-1">
            <Button variant="primary">Market Expansion</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
