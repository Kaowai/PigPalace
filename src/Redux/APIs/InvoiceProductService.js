import Axios from "./Axios";

const getListInvoiceProductService = (farmID) => {
    const url = `/api/HoaDonHangHoa/GetListPhieuNhap?FarmID=${farmID}`;
    const { data } = Axios.get(url);
    return data;
}

const createInvoiceProductService = (tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID) => {
    const url = `/api/HoaDonHangHoa/CreatePhieuNhapHangHoa`;
    const { data } = Axios.post(url, { tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID });
    return data;
}

const updateInvoiceProductService = (id, tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID) => { 
    const url = `/api/HoaDonHangHoa/UpdateHoaDonHangHoa`;
    const { data } = Axios.put(url, { id, tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID });
    return data;
}

const confirmInvoiceProductService = (maHoaDon) => { 
    const url = `/api/HoaDonHangHoa/XacNhanHoaDonHangHoa?maHoaDon=${maHoaDon}`;
    const { data } = Axios.put(url);
    return data;
}

const deleteInvoiceProductService = (maHoaDon) => { 
    const url = `/api/HoaDonHangHoa/DeleteHoaDonHangHoa?maHoaDon=${maHoaDon}`;
    const { data } = Axios.delete(url);
    return data;
}

export {
    getListInvoiceProductService,
    createInvoiceProductService,
    updateInvoiceProductService,
    confirmInvoiceProductService,
    deleteInvoiceProductService
}