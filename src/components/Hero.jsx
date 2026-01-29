import React from "react";
import banner from "../assets/banner-img-1.png";

const Hero = () => {
  return (
    <section className="border-2 border-white rounded-3xl container mx-auto bg-gradient-to-b from-white/10 to-white  mb-10">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-2xl font-bold leading-none sm:text-3xl">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>
        <p className="px-8 mt-5 mb-12 text-sm tex t-color">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="flex items-center justify-center w-full gap-5 ">
          <input
            type="text"
            placeholder="search any doctor"
            className="input rounded-2xl focus:outline-none hover:border-transparent"
          />
          <div className="">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start inline-block px-5 btn overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
            >
              <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                Search Now
              </span>
            </a>
          </div>
        </div>
        {/* doctor info based on doctor */}
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="rounded-xl">
            <img
              src={banner}
              className="max-w h-auto rounded-xl block object-cover "
              alt=""
            />
          </div>
          <div className="rounded-xl">
            <img
              src={banner}
              className="max-w h-auto rounded-xl block object-cover "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
