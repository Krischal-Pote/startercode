import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "Can I Use The Fitness Dashboard On My Mobile Device?",
      answer:
        "Yes, Our Fitness Dashboard Is Fully Optimized For Mobile Devices. You Can Access All Features And Track Your Workouts On The Go Using Your Smartphone Or Tablet. Simply Download Our App From The App Store Or Google Play",
    },
    {
      question: "How Do I Get Started With The Fitness Dashboard?",
      answer:
        "To get started, simply sign up and explore the dashboard features.",
    },
    {
      question: "How Does The Personalized Insights Feature Work?",
      answer:
        "The personalized insights feature tailors recommendations based on your activity.",
    },
    {
      question:
        "What Types Of Workouts Can I Track With The Fitness Dashboard?",
      answer:
        "You can track cardio, strength training, yoga, and many more workouts.",
    },
    {
      question: "Is My Data Safe And Secure?",
      answer: "Yes, your data is encrypted and stored securely.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-6 md:p-12 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <Typography
          variant="h5"
          className="text-gray-900 font-semibold text-center md:text-left mb-6"
        >
          Questions About Our JumboTax?
        </Typography>
        <div>
          {faqData?.map((item, index) => (
            <Accordion key={index} className="shadow-none border-b">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-gray-500" />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                className="hover:bg-gray-100"
              >
                <Typography className="font-medium text-gray-800">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-600">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <Typography
          variant="body2"
          className="text-gray-600 text-center md:text-left mt-6"
        >
          We've got answers. If you have some other questions, feel free to{" "}
          <a href="#contact" className="text-green-600 underline">
            contact us.
          </a>
        </Typography>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow p-6 md:p-8">
        <Typography
          variant="h6"
          className="text-black font-bold text-center md:text-left mb-4"
        >
          Evaluate Your Potential Savings
        </Typography>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>No Upfront Costs</li>
          <li>No Credit Card Required</li>
          <li>Quick Signup: Less Than 30 Minutes</li>
          <li>Pay 25% Of What You Save. No Hidden Costs</li>
        </ul>
        <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800">
          Join Now <span aria-hidden="true">→</span>
        </button>

        <div className="flex justify-center mt-4">
          <Typography
            variant="body2"
            className="text-gray-600 text-center mt-6"
          >
            Join +1 Million Users Around The World
          </Typography>
          {/* {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-6 w-6 rounded-full mx-1 bg-gray-300"
            ></div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
