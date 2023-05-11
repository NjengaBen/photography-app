import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="text-white p-5 z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="text-xl py-5">{message}</p>
        <button className="py-2 px-8 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
