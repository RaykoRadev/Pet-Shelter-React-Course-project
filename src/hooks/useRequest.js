import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function useRequest(url, initState) {
    const navigate = useNavigate();
    const [resData, setData] = useState(initState);
    const [loading, setLoading] = useState(true);

    const { accessToken, userLogoutHandler } = useContext(UserContext);

    const controllerRef = useRef(null); //refererention to be tracked throuth rerenders
    const initRun = useRef(true);

    const request = async (url, method, data, controller) => {
        const abortController = controller || new AbortController();
        const signal = abortController.signal;

        const options = { method, headers: {}, signal };

        if (data !== undefined) {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify(data);
        }

        if (accessToken) {
            options.headers["X-Authorization"] = accessToken;
        }

        try {
            const response = await fetch(url, options);

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
                return response;
            } else {
                return response.json();
            }
        } catch (err) {
            console.log("Fetch request aborted!");
            if ((err.name = "AbortError")) return;

            alert(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!url) return;

        const abortController = new AbortController();
        controllerRef.current = abortController;

        request(url, "GET", undefined, abortController)
            .then((res) => setData(res))
            .then(() => setLoading(false))
            .catch((err) => {
                if (err?.name !== "AbortError") {
                    alert(err.message);
                }
            });
        return () => {
            if (initRun.current) {
                initRun.current = false;
                return;
            }
            abortController.abort();
        };
    }, [url]);

    return {
        request,
        resData,
        setData,
        loading,
        abort: () => controllerRef.current?.abort(),
    };
}
