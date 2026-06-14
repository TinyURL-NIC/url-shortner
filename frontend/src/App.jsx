import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardPage/Dashboard";
import LoginSignUpPage from "./pages/LoginSignUpPage/LoginSignUpPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginSignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
