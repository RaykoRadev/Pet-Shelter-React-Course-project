import { UserContext } from "../context/userContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({ children }) {
    const [authData, setAuthData] = usePersistedState("user", {});

    const userLoginHandler = (userData) => {
        setAuthData(userData);
    };

    const userLogoutHandler = () => {
        setAuthData(null);
    };

    return (
        <UserContext.Provider
            value={{ ...authData, userLoginHandler, userLogoutHandler }}
        >
            {children}
        </UserContext.Provider>
    );
}
