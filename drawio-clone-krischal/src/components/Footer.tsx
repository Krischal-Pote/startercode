const Footer = () => {
  return (
    <div className="flex justify-center">
      <footer className="bg-teal-900 w-[95%] text-white py-10 px-6 rounded-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:underline">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Pricing</h4>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#events" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#tool-library" className="hover:underline">
                  Tool Library
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#terms" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">HonestValue</h2>
            <p className="text-sm mt-2">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="flex items-center mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-2">
              By subscribing you agree to our{" "}
              <a href="#privacy" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="#instagram" className="hover:opacity-75">
              <div className="bg-gray-800 rounded-full px-2 py-2">
                Instagram
              </div>
            </a>
            <a href="#linkedin" className="hover:opacity-75">
              <div className="bg-gray-800 rounded-full px-4 py-2">LinkedIn</div>
            </a>
            <a href="#twitter" className="hover:opacity-75">
              <div className="bg-gray-800 rounded-full px-4 py-2">Twitter</div>
            </a>
            <a href="#github" className="hover:opacity-75">
              <div className="bg-gray-800 rounded-full px-4 py-2">Github</div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
