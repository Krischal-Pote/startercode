import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Impact from "../components/Impact";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToApp = () => {
    navigate("/"); // Redirect to the main app
  };

  return (
    <div className="h-screen ">
      <Navbar />
      <Banner />
      <Impact />
    </div>
  );
};

export default LandingPage;
