const Impact: React.FC = () => {
  return (
    <section className="bg-teal-100/15 py-10 px-4 sm:px-6 md:px-10">
      <div className="flex flex-col gap-4 text-center mb-12">
        <div className="flex flex-col gap-4 sm:gap-8">
          <p className="font-bold uppercase text-base sm:text-lg">Our Impact</p>
          <h2 className="text-xl sm:text-2xl md:text-[3rem] font-bold text-gray-800 leading-tight">
            Why Reach Out To JumboTax?
          </h2>
        </div>
        <p className="mt-4 max-w-[90%] sm:max-w-[65rem] mx-auto text-sm sm:text-base">
          Reaching out to JumboTax ensures you pay property taxes that truly
          reflect your property's value. With our AI-driven expertise, we
          navigate the intricate landscape of property tax appeals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 px-4 sm:px-8 lg:px-[10%]">
        <div className="flex flex-col gap-4 text-center rounded-2xl bg-white shadow-lg px-6 py-12 sm:py-16">
          <p className="text-2xl sm:text-3xl md:text-[3rem] font-extrabold text-gray-800">
            $1,148
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Average Savings
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center rounded-2xl bg-white shadow-lg px-6 py-12 sm:py-16">
          <p className="text-2xl sm:text-3xl md:text-[3rem] font-extrabold text-gray-800">
            4.9/5
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Customer Satisfaction
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center rounded-2xl bg-white shadow-lg px-6 py-12 sm:py-16">
          <p className="text-2xl sm:text-3xl md:text-[3rem] font-extrabold text-gray-800">
            95%
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Success Rate
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 bg-white shadow-lg rounded-2xl text-center"
            >
              <img
                src="tax.png"
                alt="Icon"
                className="w-16 h-16 sm:w-24 sm:h-24 mt-6"
              />
              <div className="flex flex-col gap-4 bg-teal-100/50 p-6 rounded-b-2xl w-full">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Seamless Experience
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Say goodbye to complicated paperwork and back-and-forth with
                  tax authorities. Provide us with a few details, and we'll
                  handle the rest.
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Impact;
