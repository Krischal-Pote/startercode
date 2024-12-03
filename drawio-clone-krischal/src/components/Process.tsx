import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Process = () => {
  const processCategories = [
    "property search",
    "data gathering",
    "AI analysis",
    "appeal process",
    "tax saving",
  ] as const;
  const [isActive, setIsActive] = useState("property search");
  const handleClick = (category: string) => {
    setIsActive(category);
  };
  return (
    <section className="hidden sm:flex flex-col gap-10 py-20 px-14">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="capitalize font-bold text-[3rem]">
          how our process works
        </h2>
        <div className="flex gap-8 bg-gray-100 p-4 rounded-full">
          {processCategories.map((category) => (
            <button
              onClick={() => handleClick(category)}
              className={
                isActive === category
                  ? "capitalize bg-black text-white px-4 py-2 rounded-full"
                  : "capitalize"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4 flex-row ">
        {Array(5)
          .fill(0, 0, 5)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 justify-end p-10 text-white w-[15rem] h-[45rem] object-cover rounded-[2.5rem] custom_process"
            >
              <span className="text-sm uppercase font-semibold bg-white/20 w-fit py-2 px-6 rounded-full">
                Step {index + 1}
              </span>
              <h1 className="w-40 text-3xl font-bold uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                provide your property address and details
              </h1>
              <div className="flex items-end gap-32">
                <p className="truncate_text">
                  To kickstart the process, simply provide us with your property
                  address. Our advanced system will swiftly retrieve all the
                  relevant details related to your property. This initial step
                  ensures we have the necessary information to proceed
                  effectively, showing you your estimated tax savings right away
                </p>
                <ArrowRight className="custom_icon bg-white text-black rounded-full p-4 w-16 h-16 cursor-pointer hover:bg-white/80 hidden " />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
