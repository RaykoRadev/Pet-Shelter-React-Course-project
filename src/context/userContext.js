import { createContext, useContext } from "react";
import { clearUserData, setUserData } from "../utils/localStorageManager";

export const UserContext = createContext({
    _id: "",
    email: "",
    username: "",
    accessToken: "",
    userLoginHandler: (data) => {
        setUserData(data);
    },
    userLogoutHandler: () => {
        clearUserData();
    },
});

export function useUserContext() {
    const data = useContext(UserContext);
    return data;
}
