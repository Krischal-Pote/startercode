const GetStarted = () => {
  return (
    <div className="flex justify-center items-center mb-[30px]">
      <div className="bg-black w-[95%] h-[350px] text-white rounded-3xl p-10 flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-10">
          {Array.from({ length: 36 }).map((_, index) => (
            <div key={index} className="bg-black rounded-md"></div>
          ))}
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">95%</h1>
          <p className="text-lg font-medium mb-6">
            of our appeals are successful.
          </p>
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition mt-[80px]">
            Get Started - It's Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
