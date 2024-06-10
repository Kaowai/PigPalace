import Axios from "./Axios";

const getListInvoicePigService = (FarmID) => { 
    const url = `/api/HoaDonHeo/GetListHoaDonHeo?FarmID=${FarmID}`;
    const { data } = Axios.get(url);
    return data;
}

const getListInvoicePigImportService = (FarmID) => { 
    const url = `/api/HoaDonHeo/GetListPhieuNhap?FarmID=${FarmID}`;
    const { data } = Axios.get(url);
    return data;
}

const getListPigInInvoiceImportService = (MaHoaDon, FarmID) => { 
    const url = `/api/HoaDonHeo/GetHeoTrongPhieuNhap?MaHoaDon=${MaHoaDon}&FarmID=${FarmID}`;
    const { data } = Axios.get(url);
    return data;
}

const createInvoicePigImportService = (maHeo, maGiongHeo)