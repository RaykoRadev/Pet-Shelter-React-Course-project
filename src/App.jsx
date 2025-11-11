import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Catalog from "./components/Catalog";
import Test from "./components/Test";
import Test1 from "./components/Test1";
import Delete from "./components/Delete";
import Details from "./components/Details";
import Spinner from "./components/Spinner";
import CreateEdit from "./components/Create-edit";
import AboutUs from "./components/AboutUs";

function App() {
    return (
        <div className="relative flex flex-col min-h-screen bg-green-200 text-black overflow-hidden">
            <Navbar />

            {/* Left Glow */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-green-400/40 via-green-300/20 to-transparent blur-3xl"></div>

            {/* Right Glow */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-1/6 bg-gradient-to-l from-green-400/40 via-green-300/20 to-transparent blur-3xl"></div>

            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/register" element={<Register />} />
                    <Route path="/pets">
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="create" element={<CreateEdit />} />
                        <Route path="details/:petId" element={<Details />} />
                        <Route path="test" element={<Test />} />
                        <Route path="spinner" element={<Spinner />} />
                        <Route path="delete" element={<Delete />} />
                    </Route>
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
