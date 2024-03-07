import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/authContext/index";
import Homepage from "./components/Homepage";
import Register from "./components/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
