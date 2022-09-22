import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { LoginRedirect } from './auth/LoginRedirect';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <LoginRedirect path="/login">
                    <LogInPage />
                </LoginRedirect>
                <LoginRedirect path="/signup">
                    <SignUpPage />
                </LoginRedirect>
            </Switch>
        </Router>
    );
}