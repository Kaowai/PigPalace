import * as PigConstants from '../Constants/PigConstants';
import * as pigAPI from '../APIs/PigService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getPigAllAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.GET_ALL_PIG_REQUEST });

        // call api and recive response
        const response = await pigAPI.getAllPigService(FarmID);

        // handle get pig successfully
        dispatch({ type: PigConstants.GET_ALL_PIG_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.GET_ALL_PIG_FAIL);
    }
}

const createPigAction = (maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.CREATE_PIG_REQUEST });

        // call api and recive response
        const response = await pigAPI.createPigService(maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID);

        // handle create pig successfully
        dispatch({ type: PigConstants.CREATE_PIG_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.CREATE_PIG_FAIL);
    }   
}

const getPigByIDAction = (id) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.GET_PIG_BY_ID_REQUEST });

        // call api and recive response
        const response = await pigAPI.getPigByIDService(id);

        // handle get pig by id successfully
        dispatch({ type: PigConstants.GET_PIG_BY_ID_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.GET_PIG_BY_ID_FAIL);
    }
}

const getPigBoarAction = (FarmId) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.GET_PIG_BOAR_REQUEST });

        // call api and recive response
        const response = await pigAPI.getPigBoarService(FarmId);

        // handle get pig boar successfully
        dispatch({ type: PigConstants.GET_PIG_BOAR_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.GET_PIG_BOAR_FAIL);
    }
}

const getPigSowAction = (FarmId) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.GET_PIG_SOW_REQUEST });

        // call api and recive response
        const response = await pigAPI.getPigSowService(FarmId);

        // handle get pig sow successfully
        dispatch({ type: PigConstants.GET_PIG_SOW_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.GET_PIG_SOW_FAIL);
    }
}

const updatePigAction = (id, maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.UPDATE_PIG_REQUEST });

        // call api and recive response
        const response = await pigAPI.updatePigService(id, maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID);

        // handle update pig successfully
        dispatch({ type: PigConstants.UPDATE_PIG_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.UPDATE_PIG_FAIL);
    }
}

const deletePigAction = (id) => async (dispatch) => { 
    try {
        dispatch({ type: PigConstants.DELETE_PIG_REQUEST });

        // call api and recive response
        const response = await pigAPI.deletePigService(id);

        // handle delete pig successfully
        dispatch({ type: PigConstants.DELETE_PIG_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, PigConstants.DELETE_PIG_FAIL);
    }
}

export {
    getPigAllAction,
    createPigAction,
    getPigByIDAction,
    getPigBoarAction,
    getPigSowAction,
    updatePigAction,
    deletePigAction
}