import { Redirect, Route } from 'react-router-dom';
import { useUser } from './useUser.js';

export const PrivateRoute = props => {
    const user = useUser();

    if (!user) return <Redirect to="/login" />

    return <Route {...props} />
}