import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export default function useRequest(url, initState) {
    const [data, setData] = useState(initState);
    //todo if there is problem with the logout accessisng token to use getUserData()
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    const reqest = async (url, method, data) => {
        const optins = { method, headers: {} };

        if (data !== undefined) {
            optins.headers["Content-Type"] = "application/json";
            optins.body = JSON.stringify(data);
        }

        if (accessToken) {
            optins.headers["X-Authorization"] = accessToken;
        }

        try {
            const response = await fetch(url, optins);

            if (!response.ok) {
                const err = await response.json();

                //todo to check what is the message when token is corupted
                if (
                    response.status === 403 &&
                    err.message == "Invalid access token"
                ) {
                    userLogoutHandler();
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
    };

    return { reqest, data, setData };
}
