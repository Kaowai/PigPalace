import * as RoleConstants from '../Constants/RoleConstants';

export const createRoleReducer = (state = {}, action) => {
    switch (action.type) {
        case RoleConstants.CREATE_ROLE_REQUEST:
            return { isLoading: true };
        case RoleConstants.CREATE_ROLE_SUCCESS:
            return { isLoading: false, roleInfo: action.payload, isSuccess: true };
        case RoleConstants.CREATE_ROLE_FAIL:
            return { isLoading: false, isError: action.payload };
        case RoleConstants.CREATE_ROLE_RESET:
            return {};
        default:
            return state;
    }
}

export const getRoleReducer = (state = {}, action) => { 
    switch (action.type) {
        case RoleConstants.GET_ROLE_REQUEST:
            return { isLoading: true };
        case RoleConstants.GET_ROLE_SUCCESS:
            return { isLoading: false, roleInfo: action.payload, isSuccess: true };
        case RoleConstants.GET_ROLE_FAIL:
            return { isLoading: false, isError: action.payload };
        case RoleConstants.GET_ROLE_RESET:
            return {};
        default:
            return state;
    }
}