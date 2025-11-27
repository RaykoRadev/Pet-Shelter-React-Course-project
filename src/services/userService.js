import { clearUserData, setUserData } from "../utils/localStorageManager";
import { get, post } from "./api";

const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
};

export async function login(email, password, signal) {
    const result = await post(endpoints.login, signal, { email, password });
    console.log(result);
    setUserData({
        _id: result._id,
        email: result.email,
        username: result.username,
        accessToken: result.accessToken,
    });
    return result;
}

export async function register({ email, username, password }, signal) {
    const result = await post(endpoints.register, signal, {
        email,
        username,
        password,
    });

    setUserData({
        _id: result._id,
        email: result.email,
        username: result.username,
        accessToken: result.accessToken,
    });
    return result;
}

export async function logout(signal) {
    const promise = get(endpoints.logout, signal);
    clearUserData();

    await promise;
}
