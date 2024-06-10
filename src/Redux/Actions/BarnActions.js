import * as BarnConstants from '../Constants/BarnConstants';
import * as barnAPI from '../APIs/BarnService';
import { ErrorsAction, tokenProtection } from '../Protection';

const createBarnAction = (tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID) => async (dispatch) => { 
    try {
        dispatch({ type: BarnConstants.CREATE_BARN_REQUEST });

        // call api and recive response
        const response = await barnAPI.createBarnService(tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID);

        // handle create barn successfully
        dispatch({ type: BarnConstants.CREATE_BARN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, BarnConstants.CREATE_BARN_FAIL);
    }
}

const getAllBarnAction = (FarmId) => async (dispatch) => {
    try {
        dispatch({ type: BarnConstants.GET_ALL_BARN_REQUEST });

        // call api and recive response
        const response = await barnAPI.getAllBarnService(FarmId);

        // handle get all barn successfully
        dispatch({ type: BarnConstants.GET_ALL_BARN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, BarnConstants.GET_ALL_BARN_FAIL);
    }
}

const getBarnByIDAction = (id) => async (dispatch) => { 
    try {
        dispatch({ type: BarnConstants.GET_BARN_BY_ID_REQUEST });

        // call api and recive response
        const response = await barnAPI.getBarnByIDService(id);

        // handle get barn by id successfully
        dispatch({ type: BarnConstants.GET_BARN_BY_ID_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, BarnConstants.GET_BARN_BY_ID_FAIL);
    }
}

const updateBarnAction = (maChuong, tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID) => async (dispatch) => { 
    try {
        dispatch({ type: BarnConstants.UPDATE_BARN_REQUEST });

        // call api and recive response
        const response = await barnAPI.updateBarnService(maChuong, tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID);

        // handle update barn successfully
        dispatch({ type: BarnConstants.UPDATE_BARN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, BarnConstants.UPDATE_BARN_FAIL);
    }
}

const deleteBarnAction = (id) => async (dispatch) => { 
    try {
        dispatch({ type: BarnConstants.DELETE_BARN_REQUEST });

        // call api and recive response
        const response = await barnAPI.deleteBarnService(id);

        // handle delete barn successfully
        dispatch({ type: BarnConstants.DELETE_BARN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, BarnConstants.DELETE_BARN_FAIL);
    }
}

export {
    createBarnAction,
    getAllBarnAction,
    getBarnByIDAction,
    updateBarnAction,
    deleteBarnAction
}