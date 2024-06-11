import Axios from "./Axios";

const getListInvoiceProductService = async (farmID) => {
    const url = `/api/HoaDonHangHoa/GetListPhieuNhap?FarmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const createInvoiceProductService = async (tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID) => {
    const url = `/api/HoaDonHangHoa/CreatePhieuNhapHangHoa`;
    const { data } =await Axios.post(url, { tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID });
    return data;
}

const updateInvoiceProductService = async(id, tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID) => { 
    const url = `/api/HoaDonHangHoa/UpdateHoaDonHangHoa`;
    const { data } = await Axios.put(url, { id, tenHangHoa, loaiHangHoa, soLuong, giaTien, ngayLap, ngayMua, ghiChu, tienTrenDVT, donViTinh, tongTien, tenCongTy, tenKhachHang, diaChi, sdt, email, userID, farmID });
    return data;
}

const confirmInvoiceProductService = async(maHoaDon) => { 
    const url = `/api/HoaDonHangHoa/XacNhanHoaDonHangHoa?maHoaDon=${maHoaDon}`;
    const { data } = await Axios.put(url);
    return data;
}

const deleteInvoiceProductService = async(maHoaDon) => { 
    const url = `/api/HoaDonHangHoa/DeleteHoaDonHangHoa?maHoaDon=${maHoaDon}`;
    const { data } = await Axios.delete(url);
    return data;
}

export {
    getListInvoiceProductService,
    createInvoiceProductService,
    updateInvoiceProductService,
    confirmInvoiceProductService,
    deleteInvoiceProductService
}