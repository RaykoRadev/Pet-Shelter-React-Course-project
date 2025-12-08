import { Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./Navbar.css";
import useRequest from "../../hooks/useRequest";
import { endpoints } from "../../config/constants";
import { useToastStore } from "../../context/toastStoreZustand";
import Toast from "../toast/Toast";

export default function Navbar() {
    const navigate = useNavigate();
    const { userLogoutHandler, username } = useContext(UserContext);
    const { request } = useRequest();
    const message = useToastStore((state) => state.message);
    const closeToast = useToastStore((state) => state.clear);

    const logoutHandler = async () => {
        await request(endpoints.logout);
        userLogoutHandler();
        navigate("/");
    };

    return (
        <header className="fixed, top-0 w-full z-50 shadow-lg h-24 hidden md:flex">
            <Link
                to="/"
                className="nav-link-box  flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
            >
                <img className="nav-img" src="/footprint.png" alt="" />
            </Link>
            <nav className=" header-links contents font-semibold text-base lg:text-lg">
                <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                    <li className="p-3 xl:p-6">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/"
                        >
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="p-3 xl:p-6">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/pets/catalog"
                        >
                            <span>Catalog</span>
                        </NavLink>
                    </li>
                    {username && (
                        <li className="p-3 xl:p-6">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/pets/create"
                            >
                                <span>Create</span>
                            </NavLink>
                        </li>
                    )}
                    <li className="p-3 xl:p-6">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/about-us"
                        >
                            <span>About us</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="header-links flex font-semibold items-center px-4 lg:px-6 xl:px-8">
                <ul className="flex items-center  xl:ml-8 ">
                    {!username && (
                        <li className="p-3 xl:p-6 ">
                            <Link to="/users/login">
                                <span>Login</span>
                            </Link>
                        </li>
                    )}
                    {!username && (
                        <li className="p-3 xl:p-6 ">
                            <Link to="/users/register">
                                <span>Register</span>
                            </Link>
                        </li>
                    )}
                    <li className="p-3 xl:p-6 text-green-700 hover:text-green-600 text-lg ">
                        <span className="text-black">Welcome </span>
                        <Link to="/users/profile">
                            <span className="text-xl color-green-700 ml-1">
                                {username ? username : "Guest"}
                            </span>
                        </Link>
                    </li>
                    {username && (
                        <li className="p-3 xl:p-6 ">
                            <Link onClick={logoutHandler}>
                                <span>Logout</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            {message && <Toast message={message} onClose={closeToast} />}
        </header>
    );
}
