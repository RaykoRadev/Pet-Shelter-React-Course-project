import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-green-200 text-black overflow-hidden">
            <Navbar />
            <Login />
            <Footer />
        </div>
    );
}

export default App;
