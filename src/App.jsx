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

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-green-200 text-black overflow-hidden">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/register" element={<Register />} />
                    <Route path="/pets/catalog" element={<Catalog />} />
                    <Route path="/pets/create" element={<CreateEdit />} />
                    <Route path="/pets/details/:petId" element={<Details />} />
                    <Route path="/pets/test" element={<Test />} />
                    <Route path="/pets/spinner" element={<Spinner />} />
                    <Route path="/pets/delete" element={<Delete />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
