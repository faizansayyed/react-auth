import { Redirect, Route } from "react-router-dom";
import { useUser } from "./useUser"


export const LoginRedirect = props => {
    const user = useUser();
    if (!!user) {
        return <Redirect to="/" />
    }

    return <Route {...props} />
}