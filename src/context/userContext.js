import { createContext, useContext } from "react";
import { clearUserData } from "../utils/localStorageManager";

export const UserContext = createContext({
    _id: "",
    email: "",
    username: "",
    accessToken: "",
    // userLoginHandler: () => null,
    userLogoutHandler: () => {
        clearUserData();
    },
});

export function useUserContext() {
    const data = useContext(UserContext);
    return data;
}
