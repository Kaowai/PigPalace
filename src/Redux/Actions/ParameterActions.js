import * as ParameterConstants from '../Constants/ParameterConstants';
import * as ParameterAPI from '../APIs/ParameterService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getListParameterAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: ParameterConstants.GET_LIST_PARAMETER_REQUEST });
        const response = await ParameterAPI.getListParameterService(FarmID);
        dispatch({ type: ParameterConstants.GET_LIST_PARAMETER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, ParameterConstants.GET_LIST_PARAMETER_FAIL);
    }
}

const updateParameterAction = (FarmID, trongLuongToiThieuXuatChuong, trongLuongToiDaXuatChuong, tuoiToiThieuXuatChuong, tuoiToiDaXuatChuong, tuoiNhapDanHeoCon, giaoPhoiCanHuyetToiThieu, tuoiPhoiGiongToiThieuHeoDuc, tuoiPhoiGiongToiThieuHeoCai,soNgayToiThieuPhoiGiongLai, farmID) => async (dispatch) => { 
    try {
        dispatch({ type: ParameterConstants.UPDATE_PARAMETER_REQUEST });
        const response = await ParameterAPI.updateParameterService(FarmID, trongLuongToiThieuXuatChuong, trongLuongToiDaXuatChuong, tuoiToiThieuXuatChuong, tuoiToiDaXuatChuong, tuoiNhapDanHeoCon, giaoPhoiCanHuyetToiThieu, tuoiPhoiGiongToiThieuHeoDuc, tuoiPhoiGiongToiThieuHeoCai,soNgayToiThieuPhoiGiongLai, farmID);
        dispatch({ type: ParameterConstants.UPDATE_PARAMETER_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, ParameterConstants.UPDATE_PARAMETER_FAIL);
    }
}

export {
    getListParameterAction,
    updateParameterAction
}