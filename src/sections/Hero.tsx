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
        <div className=" flex-col md:flex-row justify-center items-center pl-20 md:pl-0 my-5 py-10 max-w-screen-xl">
          {/* left div */}

          <div className="flex-1">
            <h1 className="text-2xl lg:text-5xl  font-bold text-[#191A15] w-[455px]">
              We’re here to Increase your Productivity
            </h1>
            <Image
              className="mt-5 mb-5 w-[279px] h-[30px]"
              src={Vector1}
              alt=""
            />
            <p className="mt-6 text-lg text-[#000000] max-w-xl leading-[30px] w-[361px] lg:w-[461px]">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </p>
            <div className="flex gap-10 mt-5 mb-16">
              <button className="bg-[#54BD95] hover:shadow-lg text-white py-3 px-5 rounded-[40px] text-lg z-0 hover:scale-105 duration-300 capitalize active:scale-100">
                Try free trail
              </button>
              <button className="flex items-center text-lg">
                <span>
                  <Image src={playPng} alt="logo" />
                </span>
                View Demo
              </button>
            </div>
          </div>

          {/* right div */}

          <div className="flex-1">
            <Image src={HeroLogo} alt="" />
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-center text-4xl font-bold mb-10">
            More than 25,000 teams use Collabs
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 justify-center gap-x-12 mb-10">
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
