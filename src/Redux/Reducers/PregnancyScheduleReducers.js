import * as PregnancyScheduleConstants from '../Constants/PregnancyScheduleConstants';

export const getAllPregnancyScheduleReducer = (state = { pregnancySchedules: [] }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_REQUEST:
            return { loading: true, pregnancySchedules: [] }
        case PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_SUCCESS:
            return { loading: false, pregnancySchedules: action.payload, success: true}
        case PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_RESET:
            return { pregnancySchedules: [] }
        default:
            return state
    }
}

export const getPregnancyScheduleByUserReducer = (state = { pregnancySchedules: [] }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_REQUEST:
            return { loading: true, pregnancySchedules: [] }
        case PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_SUCCESS:
            return { loading: false, pregnancySchedules: action.payload, success: true}
        case PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_RESET:
            return { pregnancySchedules: [] }
        default:
            return state
    }
}

export const getPigByIdReducer = (state = { pig: {} }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.GET_PIG_BY_ID_REQUEST:
            return { loading: true, pig: {} }
        case PregnancyScheduleConstants.GET_PIG_BY_ID_SUCCESS:
            return { loading: false, pig: action.payload, success: true}
        case PregnancyScheduleConstants.GET_PIG_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.GET_PIG_BY_ID_RESET:
            return { pig: {} }
        default:
            return state
    }
}

export const createPregnancyScheduleReducer = (state = { pregnancySchedule: {} }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_REQUEST:
            return { loading: true, pregnancySchedule: {} }
        case PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_SUCCESS:
            return { loading: false, pregnancySchedule: action.payload, success: true}
        case PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_RESET:
            return { pregnancySchedule: {} }
        default:
            return state
    }
}

export const confirmPregnancyReducer = (state = { pregnancy: {} }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.CONFIRM_PREGNANCY_REQUEST:
            return { loading: true, pregnancySchedule: {} }
        case PregnancyScheduleConstants.CONFIRM_PREGNANCY_SUCCESS:
            return { loading: false, pregnancySchedule: action.payload, success: true}
        case PregnancyScheduleConstants.CONFIRM_PREGNANCY_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.CONFIRM_PREGNANCY_RESET:
            return { pregnancySchedule: {} }
        default:
            return state
    }
}

export const confirmFarrowingSuccessReducer = (state = { pregnancy: {} }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_REQUEST:
            return { loading: true, pregnancySchedule: {} }
        case PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_SUCCESS:
            return { loading: false, pregnancySchedule: action.payload, success: true}
        case PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_RESET:
            return { pregnancySchedule: {} }
        default:
            return state
    }
}

export const confirmFarrowingFailureReducer = (state = { pregnancy: {} }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_REQUEST:
            return { loading: true, pregnancySchedule: {} }
        case PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_SUCCESS:
            return { loading: false, pregnancySchedule: action.payload, success: true}
        case PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_RESET:
            return { pregnancySchedule: {} }
        default:
            return state
    }
}

export const deletePregnancyScheduleReducer = (state = { pregnancySchedule: {} }, action) => { 
    switch (action.type) {
        case PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_REQUEST:
            return { loading: true, pregnancySchedule: {} }
        case PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_SUCCESS:
            return { loading: false, pregnancySchedule: action.payload, success: true}
        case PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_RESET:
            return { pregnancySchedule: {} }
        default:
            return state
    }
}