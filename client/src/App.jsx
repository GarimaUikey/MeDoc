import { Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";

import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./features/auth/Signup";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>}/>

      
    </Routes>
  );
}

export default App;