import Wrapper from "@/shared/Wrapper";
import React from "react";
import playPng from "@/assets/playPng.png";
import Image from "next/image";
import HeroLogo from "@/assets/HeroLogo.png";
import Vector1 from "@/assets/Vector1.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import icon5 from "@/assets/icon5.png";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="linear-color flex flex-col md:flex-row justify-center items-center md:my-10 text-center md:text-start px-10 md:px-0">
          {/* left div */}

          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#191A15] w-[255] lg:w-[455px] mt-[-40px] md:mt-0">
              We’re here to Increase your Productivity
            </h1>
            <Image
              className="mt-5 mb-10 w-[204px] lg:w-[279px] h-[30px] mx-auto md:mx-0"
              src={Vector1}
              alt=""
            />
            <p className="mt-6 text-lg text-[#000000] mb:10 md:mb-10">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </p>
            <div className="flex gap-10 mt-10 md:mt-5 mb-16">
              <button className="bg-[#54BD95] hover:shadow-lg text-white py-2 md:py-3 px-3 md:px-5 rounded-[40px] text-sm md:text-lg z-0 hover:scale-105 duration-300 capitalize active:scale-100">
                Try free trail
              </button>
              <button className="flex items-center  text-sm md:text-lg">
                <span>
                  <Image src={playPng} alt="logo" />
                </span>
                View Demo
              </button>
            </div>
          </div>

          {/* right div */}

          <div className="flex-1">
            <Image className="mb-10 md:mb-0" src={HeroLogo} alt="" />
          </div>
        </div>

        <div className="lg:my-10 px-10 md:px-0">
          <h2 className="text-center text-4xl font-bold mb-10">
            More than 25,000 teams use Collabs
          </h2>
          <div className="grid grid-cols-3 lg:grid-cols-5 justify-center gap-x-10 mb-20 gap-y-5">
            <Image src={icon1} alt="" />
            <Image src={icon2} alt="" />
            <Image src={icon3} alt="" />
            <Image src={icon4} alt="" />
            <Image src={icon5} alt="" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
