import React from "react";
import Button from "./Button";
import jellyfishVideo from "../assets/videos/jellyfish_home_page.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        src={jellyfishVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ 
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover" 
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-white text-center px-[5%] w-full max-w-7xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
          Powering 4 million businesses globally.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl mt-2">Ready for yours.</h2>

        <div className="mt-6 flex flex-row justify-center gap-4 sm:gap-8 w-full">
          <Button variant="hero" className="max-w-[150px] sm:max-w-[200px]">
            Get started
          </Button>
          <Button variant="hero2" className="max-w-[150px] sm:max-w-[200px]">
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
