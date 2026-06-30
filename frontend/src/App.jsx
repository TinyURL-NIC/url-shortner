import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardPage/Dashboard";
import LoginSignUpPage from "./pages/LoginSignUpPage/LoginSignUpPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LinkAnalytics from "./pages/LinkAnalytics/LinkAnalytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginSignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/link/:id" element={<LinkAnalytics />} />
      <Route path="/register" element={<LoginSignUpPage />} />
    </Routes>
  );
}

export default App;
