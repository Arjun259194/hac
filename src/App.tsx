import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PatientSignUp from "./components/PatientSignUp";
import DoctorSignUp from "./components/DoctorSignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/patient-signup" element={<PatientSignUp />} />
                <Route path="/doctor-signup" element={<DoctorSignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
