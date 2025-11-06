import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-green-200 text-black overflow-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
