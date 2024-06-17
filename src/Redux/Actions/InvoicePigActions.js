import * as InvoicePigConstants from '../Constants/InvoicePigConstants';
import * as invoicePigAPI from '../APIs/InvoicePigService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getListInvoicePigAction = (FarmID) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_PIG_REQUEST });

        // call api and recive response
        const response = await invoicePigAPI.getListInvoicePigService(FarmID);

        // handle get invoice pig successfully
        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_PIG_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, InvoicePigConstants.GET_LIST_INVOICE_PIG_FAIL);
    }
}

const getListInvoicePigImportAction = (FarmID) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_REQUEST });

        const response = await invoicePigAPI.getListInvoicePigImportService(FarmID);

        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_FAIL);
    }
}

const getListPigInInvoiceImportAction = (MaHoaDon, FarmID) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_REQUEST });
        const response = await invoicePigAPI.getListPigInInvoiceService(MaHoaDon, FarmID);

        dispatch({ type: InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_FAIL);
    }
}

const getListInvoicePigExportAction = (FarmID) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_REQUEST });
        const response = await invoicePigAPI.getListInvoiePigExportService(FarmID);

        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_FAIL);
    }
}

const createInvoicePigImportAction = (NgayLap, NgayMua, Note, FarmID, UserId, TenCongTy, TenDoiTac, DiaChi, SoDienThoai, Email, dataPig) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_REQUEST });
        const response = await invoicePigAPI.createInvoicePigImportService(NgayLap, NgayMua, Note, FarmID, UserId, TenCongTy, TenDoiTac, DiaChi, SoDienThoai, Email, dataPig);
        dispatch({ type: InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_SUCCESS, payload: response });
    } catch (err) {
        console.log(err);
        ErrorsAction(err, dispatch, InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_FAIL);
    }
}

const confirmInvoicePigImportAction = (MaHoaDon) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_REQUEST });
        const response = await invoicePigAPI.confirmInvoicePigImportService(MaHoaDon);
        dispatch({ type: InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_FAIL);
    }
}

const deleteInvoicePigAction = (MaHoaDon) => async (dispatch) => { 
    try {
        dispatch({ type: InvoicePigConstants.DELETE_INVOICE_PIG_REQUEST });
        const response = await invoicePigAPI.deleteInvoicePigService(MaHoaDon);
        dispatch({ type: InvoicePigConstants.DELETE_INVOICE_PIG_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.DELETE_INVOICE_PIG_FAIL);
    }
}

const createInvoicePigExportAction = (NgayLap, NgayBan, Note, FarmID, UserId, TienTrenDVT, TongTien, TenCongTy, TenDoiTac, DiaChi, SoDienThoai, Email, dataPig) => async (dispatch) => { 
    try {
        dispatch({ type: InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_REQUEST });
        const response = await invoicePigAPI.createInvoicePigExportService(NgayLap, NgayBan, Note, FarmID, UserId, TienTrenDVT, TongTien, TenCongTy, TenDoiTac, DiaChi, SoDienThoai, Email, dataPig);
        dispatch({ type: InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_FAIL);
    }
}

const confirmInvoicePigExportAction = (maHoaDon) => async (dispatch) => { 
    try {
        dispatch({ type: InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_REQUEST });
        const response = await invoicePigAPI.confirmInvoicePigExportService(maHoaDon);
        dispatch({ type: InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_SUCCESS, payload: response });
    } catch (err) {
        ErrorsAction(err, dispatch, InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_FAIL);
    }
}

const getListInvoicePigByUserAction = (FarmID, UserID) => async (dispatch) => {
    try {
        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_REQUEST });
        const response = await invoicePigAPI.getListInvoiePigByUserSevice(FarmID, UserID);
        dispatch({ type: InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_SUCCESS, payload: response });
    } catch (err) { 
        ErrorsAction(err, dispatch, InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_FAIL);
    }
}

export {
    getListInvoicePigAction,
    getListInvoicePigImportAction,
    getListPigInInvoiceImportAction,
    getListInvoicePigExportAction,
    createInvoicePigImportAction,
    confirmInvoicePigImportAction,
    deleteInvoicePigAction,
    createInvoicePigExportAction,
    confirmInvoicePigExportAction,
    getListInvoicePigByUserAction
}