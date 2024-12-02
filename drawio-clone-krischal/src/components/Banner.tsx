import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-2">
      <div
        className="custom_banner w-[95%] h-[700px] bg-cover bg-center rounded-lg shadow-lg "
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className=" max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 ">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              One Step Away <br />
              From HonestValue
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra ante vel lectus consectetur vestibulum. In cursus dictum
              nibh molestie pretium.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-teal-700 font-medium rounded-full text-sm sm:text-base flex items-center shadow-md hover:bg-gray-100">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute z-[999] right-12 bottom-12  bg-red-500 w-[47.4%] p-6 sm:p-8 lg:p-12 shadow-lg flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
        <div className="text-center">
          <h2 className="text-4xl font-bold">80%</h2>
          <p className="text-teal-700 text-sm font-medium">↑ 54%</p>
          <p className="text-gray-600 text-sm">Use of Recycled Materials</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">65%</h2>
          <p className="text-red-500 text-sm font-medium">↓ 35%</p>
          <p className="text-gray-600 text-sm">Carbon Emission Reduction</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
