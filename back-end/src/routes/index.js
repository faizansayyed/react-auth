import { logInRoute } from './logInRoute.js';
import { signUpRoute } from './signUpRoute.js';
import { testEmailRoute } from './testEmailRoute.js';
import { testRoute } from './testRoute.js';
import { updateUserInfoRoute } from './updateUserInfoRoute.js';
import { verifyEmailRoute } from './verifyEmailRoute.js';

export const routes = [
    logInRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    testEmailRoute
];
