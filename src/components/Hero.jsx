// src/components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <img
        src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1200"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white flex flex-wrap justify-center leading-tight">
          {Array.from("Welcome to").map((letter, index) => (
            <span
              key={index}
              className="mx-1 transition-transform duration-300 hover:scale-110 shadow-lg"
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </span>
          ))}
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white flex flex-wrap justify-center mt-2 leading-tight">
          {Array.from("Shamzbridge Consulting").map((letter, index) => (
            <span
              key={index}
              className="mx-1 transition-transform duration-300 hover:scale-110 shadow-lg"
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white font-medium leading-snug">
          Empowering your business through exceptional HR services.
        </p>
      </div>
    </section>
  );
};

export default Hero;
