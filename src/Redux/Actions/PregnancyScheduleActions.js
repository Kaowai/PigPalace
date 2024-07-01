import * as PregnancyScheduleConstants from '../Constants/PregnancyScheduleConstants';
import * as pregnancyScheduleAPI from '../APIs/PregnancyScheduleService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getAllPregnancyScheduleAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_REQUEST });

        const response = await pregnancyScheduleAPI.getAllPregnancyScheduleService(FarmID);

        dispatch({ type: PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.GET_ALL_PREGNANCY_SCHEDULE_FAIL);
    }
}

const getPregnancyScheduleByUserAction = (FarmID, UserID) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_REQUEST });

        const response = await pregnancyScheduleAPI.getPregnancyScheduleByUserService(FarmID, UserID);

        dispatch({ type: PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.GET_PREGNANCY_SCHEDULE_BY_USER_FAIL);
    }
}

const getPigByIDAction = (HeoID) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.GET_PIG_BY_ID_REQUEST });

        const response = await pregnancyScheduleAPI.getPigByIDService(HeoID);

        dispatch({ type: PregnancyScheduleConstants.GET_PIG_BY_ID_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.GET_PIG_BY_ID_FAIL);
    }
}

const createPregnancyScheduleAction = (data) => async (dispatch) =>{
    try {
        dispatch({ type: PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_REQUEST });
        const response = await pregnancyScheduleAPI.createPregnancyScheduleService(data);
        dispatch({ type: PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.CREATE_PREGNANCY_SCHEDULE_FAIL);
    }
}

const confirmPregnancyAction = (MaLich, NgayDauThai, IsSuccess, FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.CONFIRM_PREGNANCY_REQUEST });
        const response = await pregnancyScheduleAPI.confirmPregnancyService(MaLich, NgayDauThai, IsSuccess, FarmID);
        dispatch({ type: PregnancyScheduleConstants.CONFIRM_PREGNANCY_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.CONFIRM_PREGNANCY_FAIL);
    }
}

const confirmFarrowingSuccessAction = (MaLich, NgayDeChinhThuc, SoHeoConSong, SoHeoDuc, SoHeoCai, SoHeoChet, SoHeoTat) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_REQUEST });
        const response = await pregnancyScheduleAPI.confirmFarrowingSuccessService(MaLich, NgayDeChinhThuc, SoHeoConSong, SoHeoDuc, SoHeoCai, SoHeoChet, SoHeoTat);
        dispatch({ type: PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.CONFIRM_FARROWING_SUCCESS_FAIL);
    }
}

const confirmFarrowingFailureAction = (MaLich, NguyenNhan, CachGiaiQuyet, GhiChuTaiSaoThatBai) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_REQUEST });
        const response = await pregnancyScheduleAPI.confirmFarrowingFailureService(MaLich, NguyenNhan, CachGiaiQuyet, GhiChuTaiSaoThatBai);
        dispatch({ type: PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.CONFIRM_FARROWING_FAILURE_FAIL);
    }
}

const deletePregnancyScheduleAction = (MaLich) => async (dispatch) => { 
    try {
        dispatch({ type: PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_REQUEST });
        const response = await pregnancyScheduleAPI.deletePregnancyScheduleService(MaLich);
        dispatch({ type: PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, PregnancyScheduleConstants.DELETE_PREGNANCY_SCHEDULE_FAIL);
    }
}
export {
    getAllPregnancyScheduleAction,
    getPregnancyScheduleByUserAction,
    getPigByIDAction,
    createPregnancyScheduleAction,
    confirmPregnancyAction,
    confirmFarrowingSuccessAction,
    confirmFarrowingFailureAction,
    deletePregnancyScheduleAction
}