import React from "react";
import Button from "./Button";
import alternativeLogo from "../assets/images/alternative_logo.svg";
import xIcon from "../assets/images/x.png";
import instagramIcon from "../assets/images/instagram.png";
import linkedinIcon from "../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-white">
      {/* Get In Touch Section (formerly GetInTouchFooterSection) */}
      <div className="pb-16 pt-16">
        <div className="w-[85%] sm:w-[75%] md:w-[85%] max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-[10%] md:gap-[20%]">
            {/* Left: Heading & Text */}
            <div className="w-full md:w-[45%] text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-semibold font-poppins mb-4">
                Get in touch with us
              </h2>
              <p className="text-base font-normal font-poppins leading-relaxed opacity-80">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full md:w-[40%] pt-8 md:pt-0">
              <div className="flex flex-col space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 pl-5 sm:pl-8 border border-white rounded-full text-base font-normal focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 pl-5 sm:pl-8 border border-white rounded-full text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex justify-center w-full mb-8 md:mb-0">
                <Button variant="chat" className="w-full md:w-auto">
                  Let's Chat
                </Button>
              </div>
            </div>
          </div>

          {/* Follow Us Section - Mobile */}
          <div className="md:hidden mt-12 text-center">
            <h3 className="text-[25px] font-semibold font-poppins mb-4">
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-8 h-8">
                <img src={xIcon} alt="X (Twitter)" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-8 h-8">
                <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-8 h-8">
                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Follow Us Section - Desktop */}
          <div className="hidden md:block md:w-[45%] mt-16">
            <h3 className="text-[25px] font-semibold font-poppins mb-4">
              Follow Us on Social Media
            </h3>
            <div className="flex gap-6">
              <a href="#" className="w-8 h-8">
                <img src={xIcon} alt="X (Twitter)" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-8 h-8">
                <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-8 h-8">
                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Original Footer content */}
      <div className="pt-16 pb-16">
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
      </div>
    </footer>
  );
}
