import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../context/userContext";

export default function IsGuest() {
    const { accessToken } = useContext(UserContext);
    if (accessToken) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}
