import { clearUserData, getUserData } from "../utils/localStorageManager";

const host = "http://localhost:3000";
//todo add a signal in the optins
async function reqest(method, url, signal, data) {
    const options = {
        method,
        headers: {},
        signal,
    };

    if (data !== undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers["X-Authorization"] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            const err = await response.json();

            if (
                response.status == 403 &&
                err.message == "Invalid access token"
            ) {
                clearUserData();
            }

            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = (url) => reqest("GET", url, signal);
export const post = (url, data) => reqest("POST", url, signal, data);
export const put = (url, data) => reqest("PUT", url, signal, data);
export const del = (url) => reqest("DELETE", url, signal);
