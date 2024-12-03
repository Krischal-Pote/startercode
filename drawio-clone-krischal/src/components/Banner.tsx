import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-2 mb-14 px-4 sm:px-6">
      <div
        className="custom_banner w-full sm:w-[95%] h-[500px] sm:h-[700px] bg-cover bg-center rounded-2xl sm:rounded-[4rem] shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/banner.jpg')",
        }}
      >
        <div className="h-full flex items-center px-6 sm:px-12 lg:px-20 py-8 sm:py-16">
          <div className="text-white text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-tight sm:leading-[5rem] [word-spacing:-5px]">
              One Step Away <br />
              From HonestValue
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg font-medium max-w-[30rem] sm:max-w-[50rem] mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra ante vel lectus consectetur vestibulum. In cursus dictum
              nibh molestie pretium.
            </p>
            <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-white text-teal-700 font-medium rounded-full text-lg flex items-center gap-3 sm:gap-4 shadow-md hover:bg-gray-100 mx-auto sm:mx-0">
              Get Started
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute z-10 right-4 sm:right-12 bottom-2 bg-gray-100 h-auto sm:h-[15rem] w-full sm:w-[47.5%] rounded-b-[2rem] sm:rounded-br-[4rem] p-4 sm:p-6 flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
        <div className="flex flex-col gap-4 text-center w-full sm:w-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <h2 className="text-3xl sm:text-[4rem] font-bold">80%</h2>
            <p className="flex gap-2 items-center text-green-500 font-medium">
              <ArrowUpRight className="bg-green-200/50 p-1 w-8 h-8 rounded-full" />
              <span className="text-xl sm:text-2xl">54%</span>
            </p>
          </div>
          <p className="text-gray-600 text-base sm:text-lg w-full sm:w-[15rem]">
            Use of Recycled Materials
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center w-full sm:w-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <h2 className="text-3xl sm:text-[4rem] font-bold">65%</h2>
            <p className="flex gap-2 items-center text-red-500 font-medium">
              <ArrowDownLeft className="bg-red-200/50 p-1 w-8 h-8 rounded-full" />
              <span className="text-xl sm:text-2xl">35%</span>
            </p>
          </div>
          <p className="text-gray-600 text-base sm:text-lg w-full sm:w-[15rem]">
            Carbon Emission Reduction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
