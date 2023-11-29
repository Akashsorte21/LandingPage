import Wrapper from "@/shared/Wrapper";
import React from "react";
import Image from "next/image";
import Feature1 from "@/assets/Feature1.png";
import Feature2 from "@/assets/Feature2.png";
import Feature3 from "@/assets/Feature3.png";

const Features = () => {
  return (
    <Wrapper>
      <div className="my-10">
        <div className="flex md:flex justify-between items-center ">
          <h1 className="w-[331px] text-3xl lg:text-5xl font-semibold">
            Our Features you cab get
          </h1>
          <p className="w-[381px]">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your projrct esaly
          </p>
          <button className="bg-[#54BD95] hover:shadow-lg text-white  md:py-3 px-5 md:px-5 rounded-[40px] text-sm md:text-lg z-0 hover:scale-105 duration-300 capitalize active:scale-100 w-[80px] md:w-[162px]">
            Get Started
          </button>
        </div>

        <article>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 my-20 justify-center justify-items-center gap-x-24 pr-10">
            <div className="md:w-5/6 lg:w-auto">
              <Image src={Feature1} alt="" />
              <h2 className="text-2xl lg:text-3xl font-semibold pt-5 ">
                Collboration Teams{" "}
              </h2>
              <p className="w-[340px] md:w-[240px]  lg:w-auto text-lg leading-[30px] mt-3 text-[#A6A6A6]">
                Here you can handle projects together with team virtually
              </p>
            </div>

            <div className="md:w-5/6 lg:w-auto">
              <Image src={Feature2} alt="" />
              <h2 className="text-2xl lg:text-3xl font-semibold pt-5">
                Cloud Storage{" "}
              </h2>
              <p className="w-[340px] md:w-[240px] lg:w-auto text-lg leading-[30px] mt-3 text-[#A6A6A6]">
                No nedd to worry about storage because we provide storage up to
                2 TB
              </p>
            </div>

            <div className="md:w-5/6 lg:w-auto">
              <Image src={Feature3} alt="" />
              <h2 className="text-2xl lg:text-3xl font-semibold pt-5">
                Daily Analytics
              </h2>
              <p className="w-[340px] md:w-[240px]  lg:w-auto text-lg leading-[30px] mt-3 text-[#A6A6A6]">
                We always provide useful informatin to make it easier for you
                every day
              </p>
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

export default Features;
