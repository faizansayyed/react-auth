import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/verify-email/:verificationString">
                    <EmailVerificationLandingPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password/:passwordResetCode">
                    <PasswordResetLandingPage />
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/please-verify">
                    <PleaseVerifyEmailPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </Router>
    );
}