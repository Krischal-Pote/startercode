import React from "react";

const Impact: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="text-center mb-12">
        <p>Our Impact</p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Why Reach Out To JumboTax?
        </h2>
        <p className=" mt-4 max-w-xl mx-auto">
          Reaching out to JumboTax ensures you pay property taxes that truly
          reflect your property's value. With our AI-driven expertise, we
          navigate the intricate landscape of property tax appeals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">$1,148</p>
          <p className="text-gray-600 mt-2">Average Savings</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">4.9/5</p>
          <p className="text-gray-600 mt-2">Customer Satisfaction</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">95%</p>
          <p className="text-gray-600 mt-2">Success Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center"
            >
              <img src="tax.png" alt="Icon" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Seamless Experience
              </h3>
              <p className="text-gray-600">
                Say goodbye to complicated paperwork and back-and-forth with tax
                authorities. Provide us with a few details, and we’ll handle the
                rest.
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Impact;
