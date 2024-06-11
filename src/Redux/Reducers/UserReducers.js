import * as UserConstants from '../Constants/UserConstants';

export const getUserByIDReducer = (state = { user: {} }, action) => { 
    switch (action.type) {
        case UserConstants.GET_USER_BY_ID_REQUEST:
            return { loading: true, user: {} }
        case UserConstants.GET_USER_BY_ID_SUCCESS:
            return { loading: false, user: action.payload, success: true}
        case UserConstants.GET_USER_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.GET_USER_BY_ID_RESET:
            return { user: {} }
        default:
            return state
    }
}

export const getUserByFarmIDReducer = (state = { users: [] }, action) => { 
    switch(action.type) {
        case UserConstants.GET_USER_BY_FARM_ID_REQUEST:
            return { loading: true, users: [] }
        case UserConstants.GET_USER_BY_FARM_ID_SUCCESS:
            return { loading: false, users: action.payload, success: true }
        case UserConstants.GET_USER_BY_FARM_ID_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.GET_USER_BY_FARM_ID_RESET:
            return { users: [] }
        default:
            return state
    }
}

export const deleteUserReducer = (state = { user: {} }, action) => { 
    switch (action.type) {
        case UserConstants.DELETE_USER_REQUEST:
            return { loading: true, user: {} }
        case UserConstants.DELETE_USER_SUCCESS:
            return { loading: false, user: action.payload, success: true}
        case UserConstants.DELETE_USER_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.DELETE_USER_RESET:
            return { user: {} }
        default:
            return state
    }
}

export const updateUserReducer = (state = { user: {} }, action) => { 
    switch (action.type) {
        case UserConstants.UPDATE_USER_REQUEST:
            return { loading: true, user: {} }
        case UserConstants.UPDATE_USER_SUCCESS:
            return { loading: false, user: action.payload, success: true}
        case UserConstants.UPDATE_USER_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.UPDATE_USER_RESET:
            return { user: {} }
        default:
            return state
    }
}

export const signInReducer = (state = { user: {} }, action) => { 
    switch (action.type) {
        case UserConstants.USER_SIGNIN_REQUEST:
            return { loading: true, user: {} }
        case UserConstants.USER_SIGNIN_SUCCESS:
            return { loading: false, user: action.payload, success: true}
        case UserConstants.USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.USER_SIGNIN_RESET:
            return { user: {} }
        default:
            return state
    }
}

export const signUpReducer = (state = { user: {} }, action) => { 
    switch (action.type) {
        case UserConstants.USER_SIGNUP_REQUEST:
            return { loading: true, user: {} }
        case UserConstants.USER_SIGNUP_SUCCESS:
            return { loading: false, user: action.payload, success: true}
        case UserConstants.USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.USER_SIGNUP_RESET:
            return { user: {} }
        default:
            return state
    }
}

export const refreshTokenReducer = (state = { user: {} }, action) => { 
    switch (action.type) {
        case UserConstants.REFRESH_TOKEN_REQUEST:
            return { loading: true, user: {} }
        case UserConstants.REFRESH_TOKEN_SUCCESS:
            return { loading: false, user: action.payload, success: true}
        case UserConstants.REFRESH_TOKEN_FAIL:
            return { loading: false, error: action.payload }
        case UserConstants.REFRESH_TOKEN_RESET:
            return { user: {} }
        default:
            return state
    }
}