import * as VaccineScheduleConstants from '../Constants/VaccineScheduleConstants';
import * as VaccineScheduleAPIs from '../APIs/VaccineScheduleService';

import { ErrorsAction, tokenProtection } from '../Protection';

const getAllMedicineAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.GET_ALL_MEDICINE_REQUEST });
        const response = await VaccineScheduleAPIs.getAllMedicineService(FarmID);
        dispatch({ type: VaccineScheduleConstants.GET_ALL_MEDICINE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.GET_ALL_MEDICINE_FAIL);
    }
}

const getAllVacineAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.GET_ALL_VACCINE_REQUEST });
        const response = await VaccineScheduleAPIs.getAllVaccineService(FarmID);
        dispatch({ type: VaccineScheduleConstants.GET_ALL_VACCINE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.GET_ALL_VACCINE_FAIL);
    }
}

const getALlVaccineScheduleAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_REQUEST });
        const response = await VaccineScheduleAPIs.getAllVaccineScheduleService(FarmID);
        dispatch({ type: VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_FAIL);
    }
}

const getVaccineScheduleByUserAction = (FarmID, UserID) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_REQUEST });
        const response = await VaccineScheduleAPIs.getAllVaccineScheduleByUserService(FarmID, UserID);
        dispatch({ type: VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.GET_ALL_VACCINE_SCHEDULE_BY_USER_FAIL);
    }
}

const getVaccineScheduleByPigAction = (HeoID) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_REQUEST });
        const response = await VaccineScheduleAPIs.getVaccineScheduleByPigIDService(HeoID);
        dispatch({ type: VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.GET_VACCINE_SCHEDULE_BY_PIG_FAIL);
    }
}

const getPigInVaccineScheduleAction = (MaLichTiem) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_REQUEST });
        const response = await VaccineScheduleAPIs.getPigInVaccineScheduleService(MaLichTiem);
        dispatch({ type: VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.GET_PIG_IN_VACCINE_SCHEDULE_FAIL);
    }
}

const createVaccineScheduleAction = (ngayTiem, maHangHoa, lieuLuong, userID, farmID, listHeoTiem) => async (dispatch) => {  
    try {
        dispatch({ type: VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_REQUEST });
        const response = await VaccineScheduleAPIs.createVaccineScheduleService(ngayTiem, maHangHoa, lieuLuong, userID, farmID, listHeoTiem);
        dispatch({ type: VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.CREATE_VACCINE_SCHEDULE_FAIL);
    }
}

const confirmVaccineScheduleAction = (MaLichTiem) => async (dispatch) => { 
    try {
        dispatch({ type: VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_REQUEST });
        const response = await VaccineScheduleAPIs.confirmVaccineScheduleService(MaLichTiem);
        dispatch({ type: VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, VaccineScheduleConstants.CONFIRM_VACCINE_SCHEDULE_FAIL);
    }
}

export {
    getAllMedicineAction,
    getAllVacineAction,
    getALlVaccineScheduleAction,
    getVaccineScheduleByUserAction,
    getVaccineScheduleByPigAction,
    getPigInVaccineScheduleAction,
    createVaccineScheduleAction,
    confirmVaccineScheduleAction
}