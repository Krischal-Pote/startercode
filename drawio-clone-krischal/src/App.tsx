import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainApp from "./pages/MainApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />

        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
