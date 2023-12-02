import Wrapper from "@/shared/Wrapper";
import React from "react";
import Image from "next/image";
import GroupImg from "@/assets/GroupImg.png";
import GetStartedLogo from "@/assets/GetStartedLogo.png";
import Ellipse1 from "@/assets/Ellipse1.png";
import Ellipse2 from "@/assets/Ellipse2.png";
import Ellipse3 from "@/assets/Ellipse3.png";
import Ellipse4 from "@/assets/Ellipse4.png";
import Ellipse5 from "@/assets/Ellipse5.png";
import logo from "@/assets/logo.png";
import ArrowRight from "@/assets/ArrowRight.png";

const Footer = () => {
  return (
    <Wrapper>
      <section>
        <div
          className=" md:flex bg-[#161C28] gap-x-10 pt-20 px-20
         lg:flex-row "
        >
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              People are Saying About DoWhith
            </h1>
            <p className="text-[#A6A6A6] mb-8">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <div className="">
              <Image className="mb-10" src={GroupImg} alt="" />
              <p className="text-[#A6A6A6] mb-10">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <p className="text-[#A6A6A6]">_ Aria Zinanrio</p>

              <div className="flex gap-x-2 mt-10 ">
                <Image className="w-[40px] md:w-[50px]" src={Ellipse1} alt="" />
                <Image className="w-[40px] md:w-[50px]" src={Ellipse2} alt="" />
                <Image className="w-[40px] md:w-[50px]" src={Ellipse3} alt="" />
                <Image className="w-[40px] md:w-[50px]" src={Ellipse4} alt="" />
                <Image className="w-[40px] md:w-[50px]" src={Ellipse5} alt="" />
              </div>
            </div>
          </div>

          {/* right content */}

          <div className="flex-1 items-center justify-center bg-[#222938] rounded-[20px] py-5 mt-10 lg:mt-0">
            <div className="flex flex-col justify-center items-center ">
              <Image src={GetStartedLogo} alt="" />
              <h1 className="mt-3 text-3xl font-medium text-white">
                Get Started
              </h1>

              <div className="w-full max-w-sm">
                <form className=" shadow-md rounded px-8 pt-6 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      className="py-2 px-3 w-full rounded-[10px]"
                      name=""
                      id=""
                      cols={30}
                      rows={3}
                      placeholder="What are you say?"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#54BD95] hover:shadow-lg text-white py-3 px-5 rounded-[10px] text-lg z-0 hover:scale-105 duration-300 capitalize active:scale-100 w-full"
                      type="button"
                    >
                      Request Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Copyright = () => {
  return (
    <Wrapper>
      <footer>
        <div className="bg-[#161C28] pt-20 px-10 lg:px-20 pb-20 py-10 lg:flex">
          <div className="flex-1">
            <Image src={logo} alt="" />
            <p className="text-[#A6A6A6] my-5">
              Get started noew try our product
            </p>
            <div className="flex">
              <input
                className="relative py-3 w-[300px] placeholder:pl-3 rounded-full outline-none border-2 border-gray-50 bg-transparent text-white"
                type="email"
                placeholder="Enter your email here"
              />
              <div>
                <Image
                  className="absolute rounded-full mt-3 m-5 left-[30%] bg-[#54BD95] hover:scale-150
                  duration-300 capitalize active:scale-100 hidden lg:block"
                  src={ArrowRight}
                  alt=""
                />
              </div>
            </div>
          </div>

          <aside>
            <div className="grid grid-flow-col lg:grid-cols-3 gap-x-8 mt-10 lg:mt-0">
              <ul className=" ">
                <li className="text-white mb-3">Support</li>
                <li className="text-[#A6A6A6] mb-2">Help centre</li>
                <li className="text-[#A6A6A6] mb-2">Account information</li>
                <li className="text-[#A6A6A6] mb-2">About</li>
                <li className="text-[#A6A6A6]">Contact us</li>
              </ul>

              <ul>
                <li className="text-white mb-3">Help and Solution</li>
                <li className="text-[#A6A6A6] mb-2">Talk to support</li>
                <li className="text-[#A6A6A6] mb-2">Support docs</li>
                <li className="text-[#A6A6A6] mb-2">System status</li>
                <li className="text-[#A6A6A6]">Covid responde</li>
              </ul>

              <ul>
                <li className="text-white mb-3">Product</li>
                <li className="text-[#A6A6A6] mb-2">Update</li>
                <li className="text-[#A6A6A6] mb-2">Security</li>
                <li className="text-[#A6A6A6] mb-2">Beta test</li>
                <li className="text-[#A6A6A6]">Pricing product</li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="flex justify-between bg-[#161C28] pb-10 px-10  md:px-20 text-[#FFFFFF] text-lg font-medium gap-x-4 lg:gap-x-0">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <p>Terms and Condtions . Privacy Policy</p>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
export { Copyright };
