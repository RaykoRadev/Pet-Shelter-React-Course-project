import { clearUserData, setUserData } from "../utils/localStorageManager";
import { get, post } from "./api";

const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
};

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    console.log(result);
    // setUserData({
    //     _id: result._id,
    //     email: result.email,
    //     username: result.username,
    //     accessToken: result.accessToken,
    // });
    return result;
}

export async function register({ email, username, password }) {
    const result = await post(endpoints.register, {
        email,
        username,
        password,
    });

    // setUserData({
    //     _id: result._id,
    //     email: result.email,
    //     username: result.username,
    //     accessToken: result.accessToken,
    // });
    return result;
}

export async function logout() {
    const promise = get(endpoints.logout);
    // clearUserData();

    await promise;
}
