import * as UserConstants from '../Constants/UserConstants';
import * as UserAPIs from '../APIs/UserService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getUserByIDAction = (ID) => async (dispatch) => {
    try {
        dispatch({ type: UserConstants.GET_USER_BY_ID_REQUEST });
        const response = await UserAPIs.getUserByIDService(ID);
        dispatch({ type: UserConstants.GET_USER_BY_ID_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.GET_USER_BY_ID_FAIL);
    }
}

const getUserByFarmIDAction = (farmID) => async (dispatch) => {
    try {
        dispatch({ type: UserConstants.GET_USER_BY_FARM_ID_REQUEST });
        const response = await UserAPIs.getUsersByFarmIDService(farmID);
        dispatch({ type: UserConstants.GET_USER_BY_FARM_ID_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.GET_USER_BY_FARM_ID_FAIL);
    }
}

const deleteUserAction = (userID) => async (dispatch) => {
    try {
        dispatch({ type: UserConstants.DELETE_USER_REQUEST });
        const response = await UserAPIs.deleteUserService(userID);
        dispatch({ type: UserConstants.DELETE_USER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.DELETE_USER_FAIL);
    }
}

const updateUserAction = (UserID, famrID, name, passWord, dateOfBirth, address, email, phoneNumber, sex, coefficientsSalary, roleName) => async (dispatch) => {
    try {
        dispatch({ type: UserConstants.UPDATE_USER_REQUEST });
        const response = await UserAPIs.updateUserService(UserID, famrID, name, passWord, dateOfBirth, address, email, phoneNumber, sex, coefficientsSalary, roleName);
        dispatch({ type: UserConstants.UPDATE_USER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.UPDATE_USER_FAIL);
    }
}

const signInAction = (UserID, PassWord) => async (dispatch) => { 
    try {
        dispatch({ type: UserConstants.USER_SIGNIN_REQUEST });
        const response = await UserAPIs.signInService(UserID, PassWord);
        dispatch({ type: UserConstants.USER_SIGNIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_SIGNIN_FAIL);
    }
}

const signUpAction = (famrID, name, passWord, dateOfBirth, address, email, phoneNumber, sex, coefficientsSalary, roleName) => async (dispatch) => { 
    try {
        dispatch({ type: UserConstants.USER_SIGNUP_REQUEST });
        const response = await UserAPIs.signUpService(famrID, name, passWord, dateOfBirth, address, email, phoneNumber, sex, coefficientsSalary, roleName);
        dispatch({ type: UserConstants.USER_SIGNUP_SUCCESS, payload: response });
    } catch (error) { 
        ErrorsAction(error, dispatch, UserConstants.USER_SIGNUP_FAIL);
    }
}

const refreshTokenAction = (accessToken, refreshToken) => async (dispatch) => { 
    try {
        dispatch({ type: UserConstants.REFRESH_TOKEN_REQUEST });
        const response = await UserAPIs.refreshTokenService(accessToken, refreshToken);
        dispatch({ type: UserConstants.REFRESH_TOKEN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.REFRESH_TOKEN_FAIL);
    }
}

export {
    getUserByIDAction,
    getUserByFarmIDAction,
    deleteUserAction,
    updateUserAction,
    signInAction,
    signUpAction,
    refreshTokenAction
}