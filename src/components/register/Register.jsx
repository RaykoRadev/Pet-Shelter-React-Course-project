import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { validateRegisterForm } from "../../utils/formValidators";
import { UserContext } from "../../context/userContext";
import useRequest from "../../hooks/useRequest";
import { endpoints } from "../../config/constants";

export default function Register() {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({});
    const { userLoginHandler } = useContext(UserContext);
    const { request } = useRequest();
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const data = Object.fromEntries(formData);
        const errorData = validateRegisterForm(data);

        setErrors(errorData);
        await setUserData(data);

        if (
            errorData.email ||
            errorData.username ||
            errorData.password ||
            errorData.rePassword
        ) {
            return;
        }

        const user = await request(endpoints.register, "POST", data);
        // const user = await register(data);
        userLoginHandler(user);
        navigate("/");
    };

    const inputStyle = (field) =>
        `${
            errors[field] && "border-2 border-red-700"
        } block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"`;

    const errorText = (field) =>
        errors[field] && <p className="text-red-700">{errors[field]}</p>;

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-1 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="/footprint.png"
                    className="mx-auto h-30 w-auto"
                />
                <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Register your account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={submitAction} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className={inputStyle("email")}
                                defaultValue={userData.email && userData.email}
                            />
                        </div>
                        {errorText("email")}
                    </div>

                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                autoComplete="username"
                                className={inputStyle("username")}
                                defaultValue={
                                    userData.username && userData.username
                                }
                            />
                        </div>
                        {errorText("username")}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className={inputStyle("password")}
                            />
                        </div>
                        {errorText("password")}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="rePassword"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Reapeat Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="rePassword"
                                name="rePassword"
                                type="password"
                                required
                                autoComplete="current-password"
                                className={inputStyle("rePassword")}
                            />
                        </div>
                        {errorText("rePassword")}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-2 mb-10 text-center text-sm/6 text-gray-500">
                    Not a member?{" "}
                    <Link
                        to="/users/login"
                        className="font-semibold text-green-700 hover:text-green-600"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
