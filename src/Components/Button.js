import React from "react";

export default function Button({ children, variant = "primary", className = "", onClick }) {
  const baseClasses = "text-[18px] font-normal transition duration-200 flex items-center justify-center whitespace-nowrap";
  const defaultClasses = "h-[41px] px-8 py-2 rounded-full whitespace-nowrap";
  const chatClasses = "h-[41px] px-8 xs:px-12 sm:px-16 md:px-20 lg:px-24 py-2 rounded-full";
  const dataMarketingClasses = "min-h-[41px] px-8 py-3 sm:py-2 rounded-full whitespace-normal sm:whitespace-nowrap";

  const variantClasses = {
    primary: `${defaultClasses} bg-[#496BEF] text-white hover:bg-[#3d5cc9]`,
    chat: `${chatClasses} bg-[#496BEF] text-white hover:bg-[#3d5cc9]`,
    secondary: `${defaultClasses} bg-stone-300 text-black hover:bg-stone-400`,
    black: `${defaultClasses} bg-black text-white hover:bg-gray-800`,
    white: `${defaultClasses} bg-white text-black hover:bg-gray-200`,
    hero: "w-full sm:w-[200px] h-[50px] text-[18px] font-normal whitespace-nowrap px-6 sm:px-12 py-4 rounded-lg bg-white text-[#496BEF] hover:bg-gray-50",
    hero2: "w-full sm:w-[200px] h-[50px] text-[18px] font-normal whitespace-nowrap px-6 sm:px-12 py-4 rounded-lg bg-[#496BEF] text-white hover:bg-blue-600",
    dataMarketing: `${dataMarketingClasses} bg-black text-white hover:bg-gray-800`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
