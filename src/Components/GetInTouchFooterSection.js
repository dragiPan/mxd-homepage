import React from "react";
import Button from "./Button";
import xIcon from "../assets/images/x.svg";
import instagramIcon from "../assets/images/instagram.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

export default function GetInTouchFooterSection() {
  return (
    <section className="relative w-full bg-[#181818] text-white py-16">
      <div className="w-[65%] md:w-[85%] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[20%]">
          {/* Left: Heading & Text */}
          <div className="w-full md:w-[45%] text-center md:text-left">
            <h2 className="text-5xl font-semibold font-poppins mb-4">
              Get in touch with us
            </h2>
            <p className="text-base font-normal font-poppins leading-relaxed opacity-80">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-[40%] pt-8 md:pt-0">
            <div className="flex flex-col space-y-4 mb-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-12 pl-8 border border-white rounded-full text-base font-normal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 pl-8 border border-white rounded-full text-base font-normal focus:outline-none"
              />
            </div>
            <div className="flex justify-center w-full mb-8 md:mb-0">
              <Button variant="chat">Let's Chat</Button>
            </div>
          </div>
        </div>

        {/* Follow Us Section - Moved outside the flex container */}
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

        {/* Follow Us Section for desktop */}
        <div className="hidden md:block md:w-[45%]">
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
    </section>
  );
}
