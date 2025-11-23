import { Link, useNavigate } from "react-router";
import { login } from "../../services/userService";
import { validateLoginForm } from "../../utils/formValidators";
import { useState } from "react";

export default function Login() {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const loginSubmitHandler = async (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");

        setUserData({ email, password });
        const errorData = validateLoginForm({ email, password });

        setErrors(errorData);

        if (errorData.email || errorData.password) {
            return;
        }

        const user = await login(email, password);
        console.log(user);

        navigate("/");
    };

    //errors visualization
    const inputStyle = (field) =>
        errors[field]
            ? "border-2 border-red-700 block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400  sm:text-sm/6"
            : "block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6";

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
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action={loginSubmitHandler}>
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
                                className="block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                            />
                        </div>
                        {errorText("password")}
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

                <p className="mt-2 text-center text-sm/6 text-gray-500">
                    Not a member?{" "}
                    <Link
                        to="/users/register"
                        className="font-semibold text-green-700 hover:text-green-600"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
