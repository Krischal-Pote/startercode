import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Impact from "../components/Impact";
import Faq from "../components/Faq";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { Process } from "../components/Process";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <Banner />
      <Impact />
      <Process />
      <Testimonial />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default LandingPage;
