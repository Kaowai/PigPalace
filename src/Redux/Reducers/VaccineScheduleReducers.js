import * as VaccineScheduleConstants from '../Constants/VaccineScheduleConstants';

export const getAllMedicineReducer = (state = { medicines: [] }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.GET_ALL_MEDICINE_REQUEST:
            return { loading: true, medicines: [] }
        case VaccineScheduleConstants.GET_ALL_MEDICINE_SUCCESS:
            return { loading: false, medicines: action.payload, success: true}
        case VaccineScheduleConstants.GET_ALL_MEDICINE_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.GET_ALL_MEDICINE_RESET:
            return { medicines: [] }
        default:
            return state
    }
}

export const getAllVacineReducer = (state = { vaccines: [] }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.GET_ALL_VACCINE_REQUEST:
            return { loading: true, vaccines: [] }
        case VaccineScheduleConstants.GET_ALL_VACCINE_SUCCESS:
            return { loading: false, vaccines: action.payload, success: true}
        case VaccineScheduleConstants.GET_ALL_VACCINE_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.GET_ALL_VACCINE_RESET:
            return { vaccines: [] }
        default:
            return state
    }
}

export const getALlVaccineScheduleReducer = (state = { vaccineSchedules: [] }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_REQUEST:
            return { loading: true, vaccineSchedules: [] }
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_SUCCESS:
            return { loading: false, vaccineSchedules: action.payload, success: true}
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_RESET:
            return { vaccineSchedules: [] }
        default:
            return state
    }
}

export const getVaccineScheduleByUserReducer = (state = { vaccineSchedules: [] }, action) => {
    switch (action.type) {
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_REQUEST:
            return { loading: true, vaccineSchedules: [] }
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_SUCCESS:
            return { loading: false, vaccineSchedules: action.payload, success: true}
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_RESET:
            return { vaccineSchedules: [] }
        default:
            return state
    }
}

export const getVaccineScheduleByPigReducer = (state = { vaccineSchedules: [] }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_REQUEST:
            return { loading: true, vaccineSchedules: [] }
        case VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_SUCCESS:
            return { loading: false, vaccineSchedules: action.payload, success: true}
        case VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_RESET:
            return { vaccineSchedules: [] }
        default:
            return state
    }
}

export const getPigInVaccineScheduleReducer = (state = { pigs: [] }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_REQUEST:
            return { loading: true, pigs: [] }
        case VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_SUCCESS:
            return { loading: false, pigs: action.payload, success: true}
        case VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_RESET:
            return { pigs: [] }
        default:
            return state
    }
}

export const createVaccineScheduleReducer = (state = { vaccineSchedule: {} }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_REQUEST:
            return { loading: true, vaccineSchedule: {} }
        case VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_SUCCESS:
            return { loading: false, vaccineSchedule: action.payload, success: true}
        case VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_RESET:
            return { vaccineSchedule: {} }
        default:
            return state
    }
}

export const confirmVaccineScheduleReducer = (state = { vaccineSchedule: {} }, action) => { 
    switch (action.type) {
        case VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_REQUEST:
            return { loading: true, vaccineSchedule: {} }
        case VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_SUCCESS:
            return { loading: false, vaccineSchedule: action.payload, success: true}
        case VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_RESET:
            return { vaccineSchedule: {} }
        default:
            return state
    }
}