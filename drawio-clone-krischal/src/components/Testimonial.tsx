const testimonials = [
  {
    name: "Jenny Wilson",
    service: "Solar energy service",
    message:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    image: "/testomonial-female1.png",
  },
  {
    name: "Dianne Russell",
    service: "EV service",
    message:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    image: "/testomonial-female2.png",
  },
  {
    name: "Cody Fisher",
    service: "Solar energy service",
    message:
      "Before discovering JumboTax, navigating property taxes felt like a relentless uphill battle. Thanks to their advanced AI-driven approach, I saved significantly on my commercial properties. Their transparent and efficient system is an absolute game-changer for business owners like me.",
    image: "/testomonial-female3.png",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-teal-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Read What Our Valuable Customers Say
        </h2>
        <p className="text-lg text-center mb-12 italic">
          “Using JumboTax saved me thousands in property taxes”
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-3xl shadow-lg flex flex-col gap-4"
            >
              <p className="text-sm md:text-base leading-relaxed">
                {testimonial.message}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <span className="text-gray-500 text-sm">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
