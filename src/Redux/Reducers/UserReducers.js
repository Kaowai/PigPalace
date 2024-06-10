import * as UserConstants from '../Constants/UserConstants';


// LOGIN
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_LOGIN_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_LOGIN_RESET:
            return {};
        default:
            return state;
    }
}

// GOOGLE LOGIN
export const userGoogleLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_GOOGLE_LOGIN_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_GOOGLE_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_GOOGLE_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_GOOGLE_LOGIN_RESET:
            return {};
        default:
            return state;
    }
}

// FACEBOOK LOGIN
export const userFacebookLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_FACEBOOK_LOGIN_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_FACEBOOK_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true};
        case UserConstants.USER_FACEBOOK_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_FACEBOOK_LOGIN_RESET:
            return {};
        default:
            return state;
    }
}

// UPGRADE ACCOUNT
export const userUpgradeAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_UPGRADE_ACCOUNT_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_UPGRADE_ACCOUNT_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_UPGRADE_ACCOUNT_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_UPGRADE_ACCOUNT_RESET:
            return {};
        default:
            return state;
    }
}

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_REGISTER_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_REGISTER_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_REGISTER_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_REGISTER_RESET:
            return {};
        default:
            return state;
    }
};

// RESET PASSWORD
export const userResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_RESET_PASSWORD_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_RESET_PASSWORD_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case UserConstants.USER_RESET_PASSWORD_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_RESET_PASSWORD_RESET:
            return {};
        default:
            return state;
    }
};

// LOGOUT
export const userLogoutAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};