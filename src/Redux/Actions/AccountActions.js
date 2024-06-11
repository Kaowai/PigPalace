import * as AccountConstants from '../Constants/AccountConstants';  
import * as AccountService from '../APIs/AccountService';
import { ErrorsAction, tokenProtection } from '../Protection';

const loginAction = (email, password) => async (dispatch) => {
    try {
        // request ACCOUNT login
        dispatch({ type: AccountConstants.ACCOUNT_LOGIN_REQUEST });
        console.log(email, password);

        // call api and recive response
        const response = await AccountService.loginService(email, password);

        // handle login successfully
        dispatch({ type: AccountConstants.ACCOUNT_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, AccountConstants.ACCOUNT_LOGIN_FAIL);
    }
}

const registerAction = (name, email, password) => async (dispatch) => {
    try {
        // request ACCOUNT register
        dispatch({ type: AccountConstants.ACCOUNT_REGISTER_REQUEST });

        // call api and recive response
        const response = await AccountService.registerService(name, email, password);

        // handle register successfully
        dispatch({ type: AccountConstants.ACCOUNT_REGISTER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, AccountConstants.ACCOUNT_REGISTER_FAIL);
    }
}

const googleLoginAction = (googleID, gmail) => async (dispatch) => {
    try {
        // request ACCOUNT google login
        dispatch({ type: AccountConstants.ACCOUNT_GOOGLE_LOGIN_REQUEST });

        // get information from ACCOUNT google
        const res = await AccountService.loginGoogleService(googleID, gmail);

        // handle login with google successfully
        dispatch({ type: AccountConstants.ACCOUNT_GOOGLE_LOGIN_SUCCESS, payload: res });
    } catch (error) {
        ErrorsAction(error, dispatch, AccountConstants.ACCOUNT_GOOGLE_LOGIN_FAIL);
    }
}

const facebookLoginAction = (facebookID) => async (dispatch) => {
    try {
        // request ACCOUNT facebook login
        dispatch({ type: AccountConstants.ACCOUNT_FACEBOOK_LOGIN_REQUEST });

        // login into database
        const res = await AccountService.loginFacebookService(facebookID);

        // handle login with facebook successfully
        dispatch({ type: AccountConstants.ACCOUNT_FACEBOOK_LOGIN_SUCCESS, payload: res });
    } catch (error) {
        ErrorsAction(error, dispatch, AccountConstants.ACCOUNT_FACEBOOK_LOGIN_FAIL);
    }
}

const upgradeAccountAction = (ACCOUNTID) => async (dispatch) => {
    try {
        // request ACCOUNT upgrade account
        dispatch({ type: AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_REQUEST });

        // call api and recive response
        const response = await AccountService.upgradeAccountService(ACCOUNTID);

        // handle upgrade account successfully
        dispatch({ type: AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_FAIL);
    }
}

const resetPasswordAction = (email) => async (dispatch) => {
    try {
        // request ACCOUNT reset password
        dispatch({ type: AccountConstants.ACCOUNT_RESET_PASSWORD_REQUEST });

        // call api and recive response
        const response = await AccountService.resetPasswordService(email);

        // handle reset password successfully
        dispatch({ type: AccountConstants.ACCOUNT_RESET_PASSWORD_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, AccountConstants.ACCOUNT_RESET_PASSWORD_FAIL);
    }
}

const logoutAccountAction = () => async (dispatch) => {
    AccountService.logoutAccountService();
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