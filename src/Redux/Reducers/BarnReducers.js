import * as BarnConstants from '../Constants/BarnConstants';

// CREATE BARN
export const createBarnReducer = (state = {}, action) => {
    switch (action.type) {
        case BarnConstants.CREATE_BARN_REQUEST:
            return { loading: true };
        case BarnConstants.CREATE_BARN_SUCCESS:
            return { loading: false, success: true, barn: action.payload };
        case BarnConstants.CREATE_BARN_FAIL:
            return { loading: false, error: action.payload };
        case BarnConstants.CREATE_BARN_RESET:
            return {};
        default:
            return state;
    }
}

// GET ALL BARN
export const getAllBarnReducer = (state = {}, action) => {
    switch (action.type) {
        case BarnConstants.GET_ALL_BARN_REQUEST:
            return { loading: true };
        case BarnConstants.GET_ALL_BARN_SUCCESS:
            return { loading: false, barns: action.payload };
        case BarnConstants.GET_ALL_BARN_FAIL:
            return { loading: false, error: action.payload };
        case BarnConstants.GET_ALL_BARN_RESET:
            return {};
        default:
            return state;
    }
}

// GET BARN BY ID
export const getBarnByIDReducer = (state = {}, action) => {
    switch (action.type) {
        case BarnConstants.GET_BARN_BY_ID_REQUEST:
            return { loading: true };
        case BarnConstants.GET_BARN_BY_ID_SUCCESS:
            return { loading: false, barn: action.payload };
        case BarnConstants.GET_BARN_BY_ID_FAIL:
            return { loading: false, error: action.payload };
        case BarnConstants.GET_BARN_BY_ID_RESET:
            return {};
        default:
            return state;
    }
}

// UPDATE BARN
export const updateBarnReducer = (state = {}, action) => {
    switch (action.type) {
        case BarnConstants.UPDATE_BARN_REQUEST:
            return { loading: true };
        case BarnConstants.UPDATE_BARN_SUCCESS:
            return { loading: false, success: true, barn: action.payload };
        case BarnConstants.UPDATE_BARN_FAIL:
            return { loading: false, error: action.payload };
        case BarnConstants.UPDATE_BARN_RESET:
            return {};
        default:
            return state;
    }
}

// DELETE BARN
export const deleteBarnReducer = (state = {}, action) => {
    switch (action.type) {
        case BarnConstants.DELETE_BARN_REQUEST:
            return { loading: true };
        case BarnConstants.DELETE_BARN_SUCCESS:
            return { loading: false, success: true };
        case BarnConstants.DELETE_BARN_FAIL:
            return { loading: false, error: action.payload };
        case BarnConstants.DELETE_BARN_RESET:
            return {};
        default:
            return state;
    }
}

