import * as AccountConstants from '../Constants/AccountConstants';


// LOGIN
export const accountLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_LOGIN_REQUEST:
            return { isLoading: true };
        case AccountConstants.ACCOUNT_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case AccountConstants.ACCOUNT_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case AccountConstants.ACCOUNT_LOGIN_RESET:
            return {};
        default:
            return state;
    }
}

// GOOGLE LOGIN
export const accountGoogleLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_GOOGLE_LOGIN_REQUEST:
            return { isLoading: true };
        case AccountConstants.ACCOUNT_GOOGLE_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case AccountConstants.ACCOUNT_GOOGLE_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case AccountConstants.ACCOUNT_GOOGLE_LOGIN_RESET:
            return {};
        default:
            return state;
    }
}

// FACEBOOK LOGIN
export const accountFacebookLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_FACEBOOK_LOGIN_REQUEST:
            return { isLoading: true };
        case AccountConstants.ACCOUNT_FACEBOOK_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true};
        case AccountConstants.ACCOUNT_FACEBOOK_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case AccountConstants.ACCOUNT_FACEBOOK_LOGIN_RESET:
            return {};
        default:
            return state;
    }
}

// UPGRADE ACCOUNT
export const accountUpgradeAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_REQUEST:
            return { isLoading: true };
        case AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_FAIL:
            return { isLoading: false, isError: action.payload };
        case AccountConstants.ACCOUNT_UPGRADE_ACCOUNT_RESET:
            return {};
        default:
            return state;
    }
}

// REGISTER
export const accountRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_REGISTER_REQUEST:
            return { isLoading: true };
        case AccountConstants.ACCOUNT_REGISTER_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case AccountConstants.ACCOUNT_REGISTER_FAIL:
            return { isLoading: false, isError: action.payload };
        case AccountConstants.ACCOUNT_REGISTER_RESET:
            return {};
        default:
            return state;
    }
};

// RESET PASSWORD
export const accountResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_RESET_PASSWORD_REQUEST:
            return { isLoading: true };
        case AccountConstants.ACCOUNT_RESET_PASSWORD_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case AccountConstants.ACCOUNT_RESET_PASSWORD_FAIL:
            return { isLoading: false, isError: action.payload };
        case AccountConstants.ACCOUNT_RESET_PASSWORD_RESET:
            return {};
        default:
            return state;
    }
};

// LOGOUT
export const accountLogoutAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case AccountConstants.ACCOUNT_LOGOUT:
            return {};
        default:
            return state;
    }
};