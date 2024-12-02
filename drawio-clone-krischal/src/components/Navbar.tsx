import { useState } from "react";
import Logo from "../../public/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white  py-4 px-6 md:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="HonestValue Logo" />
        </div>
        <button
          className="text-gray-700 focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {["home", "how-it-works", "about-us", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleSetActiveLink(link)}
              className={`${
                activeLink === link
                  ? "bg-teal-700 text-white px-4 py-2 rounded-full text-[16px]"
                  : "text-gray-700 hover:text-teal-700 text-[16px]"
              } px-4 py-2 rounded text-sm font-medium`}
            >
              {link.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 rounded-lg p-4 text-center">
          {["home", "how-it-works", "about-us", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleSetActiveLink(link)}
              className={`block ${
                activeLink === link
                  ? "bg-teal-700 text-white px-4 py-2 rounded-full"
                  : "text-gray-700 hover:text-teal-700"
              } text-sm font-medium mb-2`}
            >
              {link
                .split("-")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
