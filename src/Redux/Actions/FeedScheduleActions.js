import * as FeedScheduleConstants from '../Constants/FeedScheduleConstants';
import * as feedScheduleAPI  from '../../Services/FoodScheduleService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getListFoodAction = (FarmID) => async (dispatch) => {
    try {
        dispatch({ type: FeedScheduleConstants.GET_LIST_FOOD_REQUEST });

        const response = await feedScheduleAPI.getListFeedService(FarmID);

        dispatch({ type: FeedScheduleConstants.GET_LIST_FOOD_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.GET_LIST_FOOD_FAIL);
    }
}

const getListFeedSheduleAction = (FarmId) => async (dispatch) => { 
    try {
        dispatch({ type: FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_REQUEST });

        const response = await feedScheduleAPI.getListFeedScheduleService(FarmId);

        dispatch({ type: FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_FAIL);
    }
}

const getListFeedScheduleByUserAction = (FarmID, UserID) => async (dispatch) => { 
    try {
        dispatch({ type: FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_REQUEST });

        const response = await feedScheduleAPI.getListFeedScheduleByUserService(FarmID, UserID);

        dispatch({ type: FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.GET_LIST_FEED_SCHEDULE_BY_USER_FAIL);
    }
}

const createFeedSchedule1DateAction = (farmID, userID, ngayBatDau, thoiGianCachNhauMoiLanChoAn, maHangHoa, soLuongCho1ConHeo1Ngay, soLanChoAnMoiNgay, listChuongHeoChoAn) => async (dispatch) => {
    try {
        dispatch({ type: FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_REQUEST });
        const response = await feedScheduleAPI.createFeedSchedule1DateService(farmID, userID, ngayBatDau, thoiGianCachNhauMoiLanChoAn, maHangHoa, soLuongCho1ConHeo1Ngay, soLanChoAnMoiNgay, listChuongHeoChoAn);
        dispatch({ type: FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.CREATE_FEED_SCHEDULE_1_DATE_FAIL);
    }
}

const createFeedScheduleManyDateAction = (farmID, userID, ngayBatDau, ngayKetThuc, thoiGianCachNhauMoiLanChoAn, maHangHoa, soLuongCho1ConHeo1Ngay, soLanChoAnMoiNgay, listChuongHeoChoAn) => async (dispatch) => { 
    try {
        dispatch({ type: FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_REQUEST });
        const response = await feedScheduleAPI.createFeedScheduleManyDateService(farmID, userID, ngayBatDau, ngayKetThuc, thoiGianCachNhauMoiLanChoAn, maHangHoa, soLuongCho1ConHeo1Ngay, soLanChoAnMoiNgay, listChuongHeoChoAn);
        dispatch({ type: FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.CREATE_FEED_SCHEDULE_MANY_DATE_FAIL);
    }
}

const confirmFeedScheduleAction = (MaLich) => async (dispatch) => {
    try {
        dispatch({ type: FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_REQUEST });
        const response = await feedScheduleAPI.confirmFeedScheduleService(MaLich);
        dispatch({ type: FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.CONFIRM_FEED_SCHEDULE_FAIL);
    }
}

const deleteFeedScheduleAction = (MaLich) => async (dispatch) => { 
    try {
        dispatch({ type: FeedScheduleConstants.DELETE_FEED_SCHEDULE_REQUEST });
        const response = await feedScheduleAPI.deleteFeedScheduleService(MaLich);
        dispatch({ type: FeedScheduleConstants.DELETE_FEED_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FeedScheduleConstants.DELETE_FEED_SCHEDULE_FAIL);
    }
}

export {
    getListFoodAction,
    getListFeedSheduleAction,
    getListFeedScheduleByUserAction,
    createFeedSchedule1DateAction,
    createFeedScheduleManyDateAction,
    confirmFeedScheduleAction,
    deleteFeedScheduleAction
}