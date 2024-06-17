import Axios from "./Axios";

const getListParameterService = async (FarmID) => { 
    const url = `/api/ThamSo/GetListThamSo?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const updateParameterService = async (trongLuongToiThieuXuatChuong, trongLuongToiDaXuatChuong, tuoiToiThieuXuatChuong, tuoiToiDaXuatChuong, tuoiNhapDanHeoCon, giaoPhoiCanHuyetToiThieu, tuoiPhoiGiongToiThieuHeoDuc, tuoiPhoiGiongToiThieuHeoCai,soNgayToiThieuPhoiGiongLai, farmID) => { 
    const url = '/api/ThamSo/UpdateThamSo';
    const data = {
        trongLuongToiThieuXuatChuong,
        trongLuongToiDaXuatChuong,
        tuoiToiThieuXuatChuong,
        tuoiToiDaXuatChuong,
        tuoiNhapDanHeoCon,
        giaoPhoiCanHuyetToiThieu,
        tuoiPhoiGiongToiThieuHeoDuc,
        tuoiPhoiGiongToiThieuHeoCai,
        soNgayToiThieuPhoiGiongLai,
        farmID
    }
    const { response } = await Axios.put(url, data);
    return response;
}

export {
    getListParameterService,
    updateParameterService
}