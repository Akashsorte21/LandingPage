import Wrapper from "@/shared/Wrapper";
import React from "react";
import Image from "next/image";
import Rating from "@/assets/Rating.png";
import Rating1 from "@/assets/Rating1.png";
import Activity from "@/assets/activity.png";
import PieChart from "@/assets/pieChart 1.png";
import Vector from "@/assets/Vector.png";

const SupportPgae = () => {
  return (
    <Wrapper>
      <div
        className="md:flex justify-between items-center my-10
       bg-[#F9F8FE] mb-20 md:gap-x-20 py-20"
      >
        {/* left containt */}

        <div className="">
          <h2 className=" text-4xl sm:justify-between items-center w-[350px] lg:text-5xl font-semibold leading-[50px] lg:w-[617px] h-[122px] mb-10 md:mb-0">
            How we support our pratner all over the world
          </h2>
          <p className="text-[#A6A6A6] text.base mb-10">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </p>

          <div className="flex gap-x-10">
            <div>
              <Image src={Rating} alt="" />
              <p className="text-lg mt-3">
                <span className="font-bold">4.9</span>/5 rating
              </p>
              <p className="text-lg">databricks</p>
            </div>

            <div>
              <Image src={Rating1} alt="" />
              <p className="text-lg mt-3">
                <span className="font-bold">4.8</span>/5 rating
              </p>
              <p className="text-lg">Chainalysis</p>
            </div>
          </div>
        </div>

        {/* right containt */}

        <div className="mt-20">
          <div className="flex justify-center items-center mb-10 gap-x-4">
            <Image src={Activity} alt="" />
            <div className="">
              <h2 className="text-2xl font-bold ">Publishing</h2>
              <p className="text-[#A6A6A6] font-medium">
                Plan, collaborate, and publishing your contetn that drivees
                meaningful engagement and growth for your barnd
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center mb-10 gap-x-4">
            <Image src={PieChart} alt="" />
            <div className="justify-center">
              <h2 className="text-2xl font-bold ">Analytics</h2>
              <p className="text-[#A6A6A6] font-medium">
                Analyze your performance and create goegeous report
              </p>
            </div>
          </div>

          <div className="flex justify-start  items-center mb-10 gap-x-4">
            <Image src={Vector} alt="" />
            <div className="justify-center">
              <h2 className="text-2xl font-bold ">Engagement</h2>

              <p className="text-[#A6A6A6] font-medium">
                Quiuckly navigate you anda engage with your adience
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SupportPgae;
