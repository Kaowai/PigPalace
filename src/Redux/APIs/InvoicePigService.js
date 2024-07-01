import Axios from "./Axios";

const getListInvoicePigService = async (FarmID) => {
    const url = `/api/HoaDonHeo/GetListHoaDonHeo?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getListInvoicePigImportService = async (FarmID) => {
    const url = `/api/HoaDonHeo/GetListPhieuNhap?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getListPigInInvoiceService = async (MaHoaDon, FarmID) => {
    const url = `/api/HoaDonHeo/GetHeoTrongPhieu?MaHoaDon=${MaHoaDon}&FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}
const getListInvoiePigExportService = async (FarmID) => {
    const url = `/api/HoaDonHeo/GetListPhieuXuat?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;

}

const createInvoicePigImportService = async (NgayLap, NgayMua, Note, FarmID, UserId, TenCongTy, TenDoiTac, DiaChi, SoDienThoai, Email, dataPig) => {
    const url = `api/HoaDonHeo/CreatePhieuNhapHeo?NgayLap=${NgayLap}&NgayMua=${NgayMua}&Note=${Note}&FarmID=${FarmID}&UserId=${UserId}&TenCongTy=${TenCongTy}&TenDoiTac=${TenDoiTac}&DiaChi=${DiaChi}&SoDienThoai=${SoDienThoai}&Email=${Email}`;

    const { data } = await Axios.post(url, dataPig);

    return data;
}

const confirmInvoicePigImportService = async (MaHoaDon) => {
    const url = `/api/HoaDonHeo/XacNhanPhieuNhapHeo?MaHoaDon=${MaHoaDon}`;

    const { data } = await Axios.put(url);

    return data;
}

const deleteInvoicePigService = async (MaHoaDon) => {
    const url = `/api/HoaDonHeo/XoaHoaDonHeo?MaHoaDon=${MaHoaDon}`;
    const { data } = await Axios.delete(url);
    return data;
}

const createInvoicePigExportService = async (NgayLap, NgayBan, Note, FarmID, UserId, TienTrenDVT, TongTien, TenCongTy, TenDoiTac, DiaChi, SoDienThoai, Email, dataPig) => {
    try {
        const url = `/api/HoaDonHeo/CreatePhieuXuatHeo?NgayLap=${NgayLap}&NgayBan=${NgayBan}&Note=${Note}&FarmID=${FarmID}&UserId=${UserId}&TienTrenDVT=${TienTrenDVT}&TongTien=${TongTien}&TenCongTy=${TenCongTy}&TenDoiTac=${TenDoiTac}&DiaChi=${DiaChi}&SoDienThoai=${SoDienThoai}&Email=${Email}`;
        console.log(url);
        const { data } = await Axios.post(url, dataPig);
        return data;

    } catch (error) {
        console.log(error);
        return error;
    }
    
    
}

const confirmInvoicePigExportService = async (maHoaDon) => {
    const url = `/api/HoaDonHeo/XacNhanPhieuXuatHeo?maHoaDon=${maHoaDon}`;
    const { data } = await Axios.put(url);
    return data;
}


const getListInvoiePigByUserSevice = async (FarmID, UserID) => {
    const url = `/api/HoaDonHeo/GetListHoaDonHeoByNhanVienThucHien?FarmID=${FarmID}&UserId=${UserID}`;
    const { data } = await Axios.get(url);
    return data;
}
export {
    getListInvoicePigService,
    getListInvoicePigImportService,
    getListPigInInvoiceService,
    getListInvoiePigExportService,
    createInvoicePigImportService,
    confirmInvoicePigImportService, // Xác nhận phiếu nhập
    deleteInvoicePigService,
    createInvoicePigExportService,
    confirmInvoicePigExportService,
    getListInvoiePigByUserSevice
}