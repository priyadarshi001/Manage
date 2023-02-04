import React from "react";
import Illustration from "../assets/illustration-intro.svg";

export default function Hero() {
  return (
    <section id="#hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-3xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGreyishBlue md:text-left">
            Manage makes it simple for software teams to plan dat-to-day tasks
            while keeping the larger team goals in view
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#button"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Illustration} alt="illustration" />
        </div>
      </div>
    </section>
  );
}

// flex-row on larger screen but flex-col on smaller screen

// md: --> means if screen size >= md

// md:w-1/2 --> width should be 50%

// Mobile-first thinking===> on smaller screen: flex-col but on bigger screen it should be flex-row
    // className: flex-row md:flex-col

// responsiveness: 
    // className= "text-center text-3xl md:text-left md:text-5xl"
