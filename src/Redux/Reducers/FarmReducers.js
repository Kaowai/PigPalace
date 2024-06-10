import * as FarmConstants from '../Constants/FarmConstants';


// GET FARM
export const farmGetReducer = (state = {}, action) => {
    switch (action.type) {
        case FarmConstants.GET_FARM_REQUEST:
            return { isLoading: true };
        case FarmConstants.GET_FARM_SUCCESS:
            return { isLoading: false, farmInfo: action.payload, isSuccess: true };
        case FarmConstants.GET_FARM_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// CREATE FARM
export const farmCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FarmConstants.CREATE_FARM_REQUEST:
            return { isLoading: true };
        case FarmConstants.CREATE_FARM_SUCCESS:
            return { isLoading: false, farmInfo: action.payload, isSuccess: true };
        case FarmConstants.CREATE_FARM_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// UPDATE FARM
export const farmUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case FarmConstants.UPDATE_FARM_REQUEST:
            return { isLoading: true };
        case FarmConstants.UPDATE_FARM_SUCCESS:
            return { isLoading: false, farmInfo: action.payload, isSuccess: true };
        case FarmConstants.UPDATE_FARM_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}