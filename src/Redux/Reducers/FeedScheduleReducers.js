import * as FeedScheduleConstants from '../Constants/FeedScheduleConstants';

export const getListFoodReducer = (state = { feeds: [] }, action) => { 
    switch (action.type) {
        case FeedScheduleConstants.GET_LIST_FOOD_REQUEST:
            return { loading: true, feeds: [] }
        case FeedScheduleConstants.GET_LIST_FOOD_SUCCESS:
            return { loading: false, feeds: action.payload, success: true}
        case FeedScheduleConstants.GET_LIST_FOOD_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.GET_LIST_FOOD_RESET:
            return { feeds: [] }
        default:
            return state
    }
}

export const getListFeedScheduleReducer = (state = { feedSchedules: [] }, action) => { 
    switch (action.type) {
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_REQUEST:
            return { loading: true, feedSchedules: [] }
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_SUCCESS:
            return { loading: false, feedSchedules: action.payload, success: true}
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_RESET:
            return { feedSchedules: [] }
        default:
            return state
    }
}

export const getListFeedScheduleByUserReducer = (state = { feedSchedules: [] }, action) => { 
    switch (action.type) {
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_REQUEST:
            return { loading: true, feedSchedules: [] }
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_SUCCESS:
            return { loading: false, feedSchedules: action.payload, success: true}
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_RESET:
            return { feedSchedules: [] }
        default:
            return state
    }
}

export const createFeedSchedule1DateReducer = (state = { feedSchedule: {} }, action) => { 
    switch (action.type) {
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_REQUEST:
            return { loading: true, feedSchedule: {} }
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_SUCCESS:
            return { loading: false, feedSchedule: action.payload, success: true}
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_RESET:
            return { feedSchedule: {} }
        default:
            return state
    }
}

export const createFeedScheduleManyDateReducer = (state = { feedSchedule: {} }, action) => { 
    switch (action.type) {
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_REQUEST:
            return { loading: true, feedSchedule: {} }
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_SUCCESS:
            return { loading: false, feedSchedule: action.payload, success: true}
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_RESET:
            return { feedSchedule: {} }
        default:
            return state
    }
}

export const confirmFeedScheduleReducer = (state = { feedSchedule: {} }, action) => { 
    switch (action.type) {
        case FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_REQUEST:
            return { loading: true, feedSchedule: {} }
        case FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_SUCCESS:
            return { loading: false, feedSchedule: action.payload, success: true}
        case FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_RESET:
            return { feedSchedule: {} }
        default:
            return state
    }
}

export const deleteFeedScheduleReducer = (state = { feedSchedule: {} }, action) => { 
    switch (action.type) { 
        case FeedScheduleConstants.DELETE_FEED_SCHEDULE_REQUEST:
            return { loading: true, feedSchedule: {} }
        case FeedScheduleConstants.DELETE_FEED_SCHEDULE_SUCCESS:
            return { loading: false, feedSchedule: action.payload, success: true}
        case FeedScheduleConstants.DELETE_FEED_SCHEDULE_FAIL:
            return { loading: false, error: action.payload }
        case FeedScheduleConstants.DELETE_FEED_SCHEDULE_RESET:
            return { feedSchedule: {} }
        default:
            return state
    }
}

