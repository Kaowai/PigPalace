import * as PigConstants from '../Constants/PigConstants';

export const getAllPigReducer = (state = { pigs: [] }, action) => { 
    switch (action.type) {
        case PigConstants.GET_ALL_PIG_REQUEST:
            return { loading: true, pigs: [] }
        case PigConstants.GET_ALL_PIG_SUCCESS:
            return { loading: false, pigs: action.payload, succcess: true}
        case PigConstants.GET_ALL_PIG_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.GET_ALL_PIG_RESET:
            return { pigs: [] }
        default:
            return state
    }
}

export const getPigByIdReducer = (state = { pig: {} }, action) => { 
    switch (action.type) {
        case PigConstants.GET_PIG_BY_ID_REQUEST:
            return { loading: true, pig: {} }
        case PigConstants.GET_PIG_BY_ID_SUCCESS:
            return { loading: false, pig: action.payload, succcess: true}
        case PigConstants.GET_PIG_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.GET_PIG_BY_ID_RESET:
            return { pig: {} }
        default:
            return state
    }
}

export const createPigReducer = (state = { pig: {} }, action) => { 
    switch (action.type) {
        case PigConstants.CREATE_PIG_REQUEST:
            return { loading: true, pig: {} }
        case PigConstants.CREATE_PIG_SUCCESS:
            return { loading: false, pig: action.payload, succcess: true}
        case PigConstants.CREATE_PIG_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.CREATE_PIG_RESET:
            return { pig: {} }
        default:
            return state
    }
}

export const getPigBoarReducer = (state = { pigs: [] }, action) => { 
    switch (action.type) {
        case PigConstants.GET_PIG_BOAR_REQUEST:
            return { loading: true, pigs: [] }
        case PigConstants.GET_PIG_BOAR_SUCCESS:
            return { loading: false, pigs: action.payload, succcess: true}
        case PigConstants.GET_PIG_BOAR_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.GET_PIG_BOAR_RESET:
            return { pigs: [] }
        default:
            return state
    }
}

export const getPigSowReducer = (state = { pigs: [] }, action) => { 
    switch (action.type) {
        case PigConstants.GET_PIG_SOW_REQUEST:
            return { loading: true, pigs: [] }
        case PigConstants.GET_PIG_SOW_SUCCESS:
            return { loading: false, pigs: action.payload, succcess: true}
        case PigConstants.GET_PIG_SOW_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.GET_PIG_SOW_RESET:
            return { pigs: [] }
        default:
            return state
    }
}

export const updatePigReducer = (state = { pig: {} }, action) => { 
    switch (action.type) {
        case PigConstants.UPDATE_PIG_REQUEST:
            return { loading: true, pig: {} }
        case PigConstants.UPDATE_PIG_SUCCESS:
            return { loading: false, pig: action.payload, succcess: true}
        case PigConstants.UPDATE_PIG_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.UPDATE_PIG_RESET:
            return { pig: {} }
        default:
            return state
    }
}

export const deletePigReducer = (state = { pig: {} }, action) => { 
    switch (action.type) {
        case PigConstants.DELETE_PIG_REQUEST:
            return { loading: true, pig: {} }
        case PigConstants.DELETE_PIG_SUCCESS:
            return { loading: false, pig: action.payload, succcess: true}
        case PigConstants.DELETE_PIG_FAIL:
            return { loading: false, error: action.payload }
        case PigConstants.DELETE_PIG_RESET:
            return { pig: {} }
        default:
            return state
    }
}

