import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Catalog from "./components/Catalog";
import Test from "./components/Test";

function App() {
    return (
        <div className="min-h-screen bg-green-200 text-black overflow-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/register" element={<Register />} />
                <Route path="/pets/catalog" element={<Catalog />} />
                <Route path="/pets/test" element={<Test />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
