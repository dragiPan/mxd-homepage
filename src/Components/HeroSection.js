import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <iframe
        src="https://player.vimeo.com/video/771577378?autoplay=1&loop=1&muted=1&background=1"
        style={{ border: "none" }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-white text-center px-[5%] w-full max-w-7xl">
        <h1 className="text-6xl leading-tight">
          Powering 4 million businesses globally.
        </h1>
        <h2 className="text-6xl mt-2">Ready for yours.</h2>

        <div className="mt-6 flex gap-8">
          <Button variant="hero">
            Get started
          </Button>
          <Button variant="hero2">
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
