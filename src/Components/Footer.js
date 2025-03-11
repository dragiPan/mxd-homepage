import React from "react";
import alternativeLogo from "../assets/images/alternative_logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-white py-16">
      <div className="w-[90%] max-w-[1600px] mx-auto">
        <div className="flex flex-col md:items-start items-center md:flex-row md:gap-[25%] lg:gap-[35%] md:justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 mb-12 md:mb-0">
            <img src={alternativeLogo} alt="MxD Alternative Logo" className="h-16 lg:h-20" />
          </div>

          {/* Navigation Columns Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 w-full md:w-auto text-center sm:text-left">
            {/* Services */}
            <div className="sm:pr-4">
              <h3 className="text-[18px] font-normal font-poppins mb-6">
                Services
              </h3>
              <ul className="text-[12px] font-normal font-poppins text-[#80868A] space-y-3">
                <li>B2B Marketing</li>
                <li>Go-to-Market Strategy</li>
                <li>Market Expansion</li>
                <li>Growth Marketing</li>
                <li>CMO & Marketing Strategy</li>
                <li>Data & AI</li>
                <li>High Intent Lead Generation</li>
                <li>CAC & LTV Optimisation</li>
                <li>Paid & Performance Marketing</li>
                <li>Conversion Rate Optimisation (CRO)</li>
                <li>Sales Team Enablement</li>
                <li>Content & SEO</li>
                <li>Branding</li>
              </ul>
            </div>

            {/* Verticals */}
            <div className="sm:px-4">
              <h3 className="text-[18px] font-normal font-poppins mb-6">
                Verticals
              </h3>
              <ul className="text-[12px] font-normal font-poppins text-[#80868A] space-y-3">
                <li>B2B</li>
                <li>Direct to Consumer</li>
                <li>Consumer Services</li>
              </ul>
            </div>

            {/* Marketing Solutions */}
            <div className="sm:pl-4">
              <h3 className="text-[18px] font-normal font-poppins mb-6">
                Marketing Solutions
              </h3>
              <ul className="text-[12px] font-normal font-poppins text-[#80868A] space-y-3">
                <li>Paid Media</li>
                <li>Performance Marketing, Paid Media, Paid Social</li>
                <li>Earned Media:</li>
                <li>Public Relations, Influencer, Affiliate</li>
                <li>Owned Media</li>
                <li>SEO, Social Media, Branding, Email & SMS, Content Marketing, CRO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
