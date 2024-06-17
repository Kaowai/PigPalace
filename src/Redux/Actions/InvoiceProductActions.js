import * as InvoiceProductConstants from '../Constants/InvoiceProductConstants';
import * as invoiceProductAPI from '../APIs/InvoiceProductService';
import { ErrorsAction, tokenProtection } from '../Protection';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const getInvoiceProductAllAction = (FarmID) => async (dispatch) => { 
    try {
        dispatch({ type: InvoiceProductConstants.GET_LIST_INVOICE_REQUEST });

        // call api and recive response
        const response = await invoiceProductAPI.getListInvoiceProductService(FarmID);

        // handle get invoice product successfully
        dispatch({ type: InvoiceProductConstants.GET_LIST_INVOICE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, InvoiceProductConstants.GET_LIST_INVOICE_FAIL);
    }
}

const createInvoiceProductAction = (tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID) => async (dispatch) => { 
    try {
        dispatch({ type: InvoiceProductConstants.CREATE_INVOICE_REQUEST });

        // call api and recive response
        const response = await invoiceProductAPI.createInvoiceProductService(tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID);

        // handle create invoice product successfully
        dispatch({ type: InvoiceProductConstants.CREATE_INVOICE_SUCCESS, payload: response });

        toast.success("Create Invoice Successfully!");
    } catch (error) {
        console.log("lỗi");
        ErrorsAction(error, dispatch, InvoiceProductConstants.CREATE_INVOICE_FAIL);
    }
}

const updateInvoiceProductAction = (id, tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID) => async (dispatch) => {
    try {
        dispatch({ type: InvoiceProductConstants.UPDATE_INVOICE_REQUEST });

        // call api and recive response
        const response = await invoiceProductAPI.updateInvoiceProductService(id, tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID);

        // handle update invoice product successfully
        dispatch({ type: InvoiceProductConstants.UPDATE_INVOICE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, InvoiceProductConstants.UPDATE_INVOICE_FAIL);
    }
}

const confirmInvoiceProductAction = (maHoaDon) => async (dispatch) => {
    try {
        dispatch({ type: InvoiceProductConstants.CONFIRM_INVOICE_REQUEST });

        // call api and recive response
        const response = await invoiceProductAPI.confirmInvoiceProductService(maHoaDon);

        // handle confirm invoice product successfully
        dispatch({ type: InvoiceProductConstants.CONFIRM_INVOICE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, InvoiceProductConstants.CONFIRM_INVOICE_FAIL);
    }
}

const deleteInvoiceProductAction = (maHoaDon) => async (dispatch) => {
    try {
        dispatch({ type: InvoiceProductConstants.DELETE_INVOICE_REQUEST });

        // call api and recive response
        const response = await invoiceProductAPI.deleteInvoiceProductService(maHoaDon);

        // handle delete invoice product successfully
        dispatch({ type: InvoiceProductConstants.DELETE_INVOICE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, InvoiceProductConstants.DELETE_INVOICE_FAIL);
    }
}

export {
    getInvoiceProductAllAction,
    createInvoiceProductAction,
    updateInvoiceProductAction,
    confirmInvoiceProductAction,
    deleteInvoiceProductAction
}