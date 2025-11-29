import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { clearUserData } from "../utils/localStorageManager";
import { useNavigate } from "react-router";

export default function useRequest(url, initState) {
    const navigate = useNavigate();
    const [resData, setData] = useState(initState);
    const [loading, setLoading] = useState(true);

    const { accessToken, userLogoutHandler } = useContext(UserContext);

    const request = async (url, method, data) => {
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
                    response.status === 400 &&
                    (err.message == "jwt expired" ||
                        err.message == "invalid signature")
                ) {
                    // clearUserData();
                    userLogoutHandler();
                    navigate("/users/login", { replace: true });
                }

                throw new Error(err.message);
            }

            if (response.status == 204) {
                setLoading(false);
                return response;
            } else {
                setLoading(false);
                return response.json();
            }
        } catch (err) {
            alert(err.message);
            throw err;
        }
    };

    useEffect(() => {
        if (!url) return;

        request(url)
            .then((res) => setData(res))
            .then(() => setLoading(false))
            .catch((err) => alert(err.message));
    }, [url]);

    return { request, resData, setData, loading };
}
