import * as UserConstants from '../Constants/UserConstants';  
import * as userAPI from '../APIs/UserService';
import { ErrorsAction, tokenProtection } from '../Protection';

const loginAction = (email, password) => async (dispatch) => {
    try {
        // request user login
        dispatch({ type: UserConstants.USER_LOGIN_REQUEST });
        console.log(email, password);

        // call api and recive response
        const response = await userAPI.loginService(email, password);

        // handle login successfully
        dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_LOGIN_FAIL);
    }
}

const registerAction = (name, email, password) => async (dispatch) => {
    try {
        // request user register
        dispatch({ type: UserConstants.USER_REGISTER_REQUEST });

        // call api and recive response
        const response = await userAPI.registerService(name, email, password);

        // handle register successfully
        dispatch({ type: UserConstants.USER_REGISTER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_REGISTER_FAIL);
    }
}

const googleLoginAction = (googleID, gmail) => async (dispatch) => {
    try {
        // request user google login
        dispatch({ type: UserConstants.USER_GOOGLE_LOGIN_REQUEST });

        // get information from user google
        const res = await userAPI.loginGoogleService(googleID, gmail);

        // handle login with google successfully
        dispatch({ type: UserConstants.USER_GOOGLE_LOGIN_SUCCESS, payload: res });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_GOOGLE_LOGIN_FAIL);
    }
}

const facebookLoginAction = (facebookID) => async (dispatch) => {
    try {
        // request user facebook login
        dispatch({ type: UserConstants.USER_FACEBOOK_LOGIN_REQUEST });

        // login into database
        const res = await userAPI.loginFacebookService(facebookID);

        // handle login with facebook successfully
        dispatch({ type: UserConstants.USER_FACEBOOK_LOGIN_SUCCESS, payload: res });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_FACEBOOK_LOGIN_FAIL);
    }
}

const upgradeAccountAction = (userID) => async (dispatch) => {
    try {
        // request user upgrade account
        dispatch({ type: UserConstants.USER_UPGRADE_ACCOUNT_REQUEST });

        // call api and recive response
        const response = await userAPI.upgradeAccountService(userID);

        // handle upgrade account successfully
        dispatch({ type: UserConstants.USER_UPGRADE_ACCOUNT_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_UPGRADE_ACCOUNT_FAIL);
    }
}

const resetPasswordAction = (email) => async (dispatch) => {
    try {
        // request user reset password
        dispatch({ type: UserConstants.USER_RESET_PASSWORD_REQUEST });

        // call api and recive response
        const response = await userAPI.resetPasswordService(email);

        // handle reset password successfully
        dispatch({ type: UserConstants.USER_RESET_PASSWORD_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_RESET_PASSWORD_FAIL);
    }
}

const logoutAccountAction = () => async (dispatch) => {
    userAPI.logoutAccountService();
}
export {
    loginAction,
    registerAction,
    googleLoginAction,
    facebookLoginAction,
    upgradeAccountAction,
    resetPasswordAction,
    logoutAccountAction
}