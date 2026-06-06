import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LoginRegister from "./Components/LoginRegister/LoginRegister";

function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;

