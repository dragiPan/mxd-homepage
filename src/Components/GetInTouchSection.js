import React from "react";
import Button from "./Button";

export default function GetInTouchSection() {
  return (
    <section className="relative w-full bg-white py-16">
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
                className="w-full h-12 pl-8 border border-black rounded-full text-base font-normal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 pl-8 border border-black rounded-full text-base font-normal focus:outline-none"
              />
            </div>
            <div className="flex justify-center w-full">
              <Button variant="chat">
                Let's Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
