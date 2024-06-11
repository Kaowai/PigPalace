import * as ParameterConstants from '../Constants/ParameterConstants';

export const getListParameterReducer = (state = { parameters: [] }, action) => { 
    switch (action.type) {
        case ParameterConstants.GET_LIST_PARAMETER_REQUEST:
            return { loading: true, parameters: [] }
        case ParameterConstants.GET_LIST_PARAMETER_SUCCESS:
            return { loading: false, parameters: action.payload, success: true}
        case ParameterConstants.GET_LIST_PARAMETER_FAIL:
            return { loading: false, error: action.payload }
        case ParameterConstants.GET_LIST_PARAMETER_RESET:
            return { parameters: [] }
        default:
            return state
    }
}

export const updateParameterReducer = (state = { parameter: {} }, action) => { 
    switch (action.type) {
        case ParameterConstants.UPDATE_PARAMETER_REQUEST:
            return { loading: true, parameter: {} }
        case ParameterConstants.UPDATE_PARAMETER_SUCCESS:
            return { loading: false, parameter: action.payload, success: true}
        case ParameterConstants.UPDATE_PARAMETER_FAIL:
            return { loading: false, error: action.payload }
        case ParameterConstants.UPDATE_PARAMETER_RESET:
            return { parameter: {} }
        default:
            return state
    }
}