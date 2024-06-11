import Axios from "./Axios";

const createPigService = async (maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID) => {
    const url = `/api/Heo/CreateHeo`;
    const { data } = await Axios.post(url, { maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID });
    return data;
}

const getAllPigService = async (farmID) => {
    const url = `/api/Heo/GetAllHeo/${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getPigByIDService = async (id) => {
    const url = `/api/Heo/GetHeoByID/${id}`;
    const { data } = await Axios.get(url);
    return data;
}

const getPigBoarService = async (farmID) => {
    const url = `/api/Heo/GetListHeoDuc?FarmId=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getPigSowService = async (farmID) => {
    const url = `/api/Heo/GetListHeoCai?FarmId=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const updatePigService = async (id, maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID) => {
    const url = `/api/Heo/UpdateHeo`;
    const { data } = await Axios.put(url, { id, maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID });
    return data;
}

const deletePigService = async (id) => {
    const url = `/api/Heo/DeleteHeo/${id}`;
    const { data } = await Axios.delete(url);
    return data;
}

export {
    createPigService,
    getAllPigService,
    getPigByIDService,
    getPigBoarService,
    getPigSowService,
    updatePigService,
    deletePigService
}