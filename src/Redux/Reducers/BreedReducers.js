import * as PigConstants from '../Constants/BreedConstants';

export const breedCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PigConstants.CREATE_BREED_REQUEST:
            return { isLoading: true };
        case PigConstants.CREATE_BREED_SUCCESS:
            return { isLoading: false, breedInfo: action.payload, isSuccess: true };
        case PigConstants.CREATE_BREED_FAIL:
            return { isLoading: false, isError: action.payload };
        case PigConstants.CREATE_BREED_RESET:
            return {};
        default:
            return state;
    }
}

export const breedGetByFarmIdReducer = (state = {}, action) => {
    switch (action.type) {
        case PigConstants.GET_BREED_BY_FARM_ID_REQUEST:
            return { isLoading: true };
        case PigConstants.GET_BREED_BY_FARM_ID_SUCCESS:
            return { isLoading: false, breedInfo: action.payload, isSuccess: true };
        case PigConstants.GET_BREED_BY_FARM_ID_FAIL:
            return { isLoading: false, isError: action.payload };
        case PigConstants.GET_BREED_BY_FARM_ID_RESET:
            return {};
        default:
            return state;
    }
}   

export const breedGetByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case PigConstants.GET_BREED_BY_ID_REQUEST:
            return { isLoading: true };
        case PigConstants.GET_BREED_BY_ID_SUCCESS:
            return { isLoading: false, breedInfo: action.payload, isSuccess: true };
        case PigConstants.GET_BREED_BY_ID_FAIL:
            return { isLoading: false, isError: action.payload };
        case PigConstants.GET_BREED_BY_ID_RESET:
            return {};
        default:
            return state;
    }
}

export const breedUpdateReducer = (state = {}, action) => { 
    switch (action.type) {
        case PigConstants.UPDATE_BREED_REQUEST:
            return { isLoading: true };
        case PigConstants.UPDATE_BREED_SUCCESS:
            return { isLoading: false, breedInfo: action.payload, isSuccess: true };
        case PigConstants.UPDATE_BREED_FAIL:
            return { isLoading: false, isError: action.payload };
        case PigConstants.UPDATE_BREED_RESET:
            return {};
        default:
            return state;
    }
}

export const deleteBreedReducer = (state = {}, action) => { 
    switch (action.type) {
        case PigConstants.DELETE_BREED_REQUEST:
            return { isLoading: true };
        case PigConstants.DELETE_BREED_SUCCESS:
            return { isLoading: false, breedInfo: action.payload, isSuccess: true };
        case PigConstants.DELETE_BREED_FAIL:
            return { isLoading: false, isError: action.payload };
        case PigConstants.DELETE_BREED_RESET:
            return {};
        default:
            return state;
    }
}