import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Test from "./components/Test";
import Test1 from "./components/Test1";
import NotFound from "./components/not-found/NotFound";
import Register from "./components/register/Register";
import CreateEdit from "./components/create-edit/CreateEdit";
import Details from "./components/details/Details";
import Spinner from "./components/spinner/Spinner";
import Delete from "./components/delete/Delete";
import AboutUs from "./components/about-us/AboutUs";
import Navbar from "./components/navbar/Navbar";
import Catalog from "./components/catalog/Catalog";

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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
