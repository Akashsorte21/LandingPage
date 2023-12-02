import React from "react";
import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import Substract from "@/assets/Subtract.png";
import BenifitImg from "@/assets/BenifitImg.png";

const Benifit = () => {
  return (
    <Wrapper>
      <div className="flex justify-center items-center my-24">
        {/* left containt */}

        <div className="flex-1">
          <h1
            className="text-3xl md:text-5xl font-bold 
          leading-[45px] lg:leading-[60px] lg:w-[429px] h-[122px]"
          >
            What Benifit Will You Get
          </h1>
          <div>
            <ul className="mt-5 lg:mt-0">
              <li className="flex items-center gap-3 mb-3">
                <Image src={Substract} alt="" /> Free Consulting With Experet
                Saving Money
              </li>
              <li className="flex items-center gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Online Banking
              </li>
              <li className="flex items-center gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Investment Report Every Month
              </li>
              <li className="flex items-center gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Saving Money For The Future
              </li>
              <li className="flex items-center gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Online Transaction
              </li>
            </ul>
          </div>
        </div>

        {/* right container */}

        <div className="flex-1 mt-5 lg:mt-0">
          <Image src={BenifitImg} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const SelectPlan = () => {
  return (
    <Wrapper>
      <section>
        <div className="my-24">
          <div className="text-center">
            <h1 className=" text-center mx-auto text-4xl md:text-5xl leading-[60px] font-bold w-[439] lg:w-[539px]">
              Choose Plan That’s Right For You
            </h1>
            <p className="mt-6 mb-2 text-lg text-[#A6A6A6]">
              Choose plan that works best for you, feel free to contact us
            </p>
            <div className="w-[240px] h-[70px] py-2 shadow-xl  text-center mx-auto pt-6 rounded-[10px]">
              Bill Monthly
              <button className="bg-[#54BD95] text-white py-[8px] px-5 rounded-[10px] text-base ml-5">
                Bil Yearly
              </button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Plans = () => {
  return (
    <Wrapper>
      <div className="my-24 gap-x-5 grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:grid-cols-3 gap-3 justify-items-center mx-auto ">
        <div className="shadow-2xl text-center p-3 lg:p-5 py-20 max-w-xs rounded-[20px] hover:scale-110 duration-300 capitalize active:scale-100 ">
          <h2 className="text-center text-3xl font-semibold mb-3">Free</h2>
          <p className="text-center text-lg text-[#A6A6A6] leading-7">
            Have a go and test your superpowers
          </p>
          <h1 className="text-center mt-3 text-5xl font-semibold">
            <span className="text-[#A6A6A6]">$</span>0
          </h1>
          <ul className="mt-5">
            <li className="flex items-center gap-3 mb-3">
              <Image src={Substract} alt="" /> 2 Users
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />2 Files
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              Public Share& Comments
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              Chat Support
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              New income apps
            </li>
          </ul>
          <button className="text-[#54BD95] mt-7">Signup for free</button>
        </div>

        <div className="shadow-2xl p-3 lg:p-5 max-w-xs rounded-[20px] bg-[#54BD95] hover:scale-110 duration-300 capitalize active:scale-100 ">
          <h2 className="text-center text-3xl font-semibold mb-3 text-[#FFFFFF]">
            Pro
          </h2>
          <p className="text-center text-lg text-[#FFFFFF] leading-7">
            Have a go and test your superpowers
          </p>
          <h1 className="text-center text-[#FFFFFF] mt-3 text-5xl font-semibold">
            <span className="text-[]">$</span>8
          </h1>
          <div className="w-[130px] py-3 text-center mx-auto rounded-[10px] text-[14px] mt-2  text-[#FFFFFF] bg-[#6BC2A1]">
            Save $50 a year
          </div>
          <div className="bg-[#FFFFFF] rounded-[10px] text-center">
            <ul className="mt-5 rounded-[20px] p-5 ">
              <li className="flex items-center gap-3 mb-3 text-start">
                <Image src={Substract} alt="" /> Free Consulting With Experet
                Saving Money
              </li>
              <li className="flex items-center gap-3 text-start mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Online Banking
              </li>
              <li className="flex items-center text-start gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Investment Report Every Month
              </li>
              <li className="flex items-center text-start gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Saving Money For The Future
              </li>
              <li className="flex items-center text-start gap-3 mb-3">
                {" "}
                <Image src={Substract} alt="" />
                Online Transaction
              </li>
            </ul>
            <button className="bg-[#54BD95] text-white py-2 px-8 lg:px-16 rounded-[10px] text-base mb-5">
              Go to pro
            </button>
          </div>
        </div>

        <div className="shadow-2xl p-3 lg:p-5 text-center px-6 py-20 max-w-xs rounded-[20px] hover:scale-110 duration-300 capitalize active:scale-100 ">
          <h2 className="text-center text-3xl font-semibold mb-3">Business</h2>
          <p className="text-center text-lg text-[#A6A6A6] leading-7">
            Unveil new superpowers and join the Design Leaque
          </p>
          <h1 className="text-center mt-3 text-5xl font-semibold">
            <span className="text-[#A6A6A6]">$</span>16
          </h1>

          <ul className="mt-5">
            <li className="flex items-center gap-3 mb-3">
              <Image src={Substract} alt="" /> All the features of pro plan
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              Account success Manager
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              Single Sign-On (SSO)
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              Co-conception pogram
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <Image src={Substract} alt="" />
              Collaboration-Soon
            </li>
          </ul>
          <button className="text-[#54BD95] mt-7">Goto Business</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Benifit;
export { SelectPlan, Plans };
