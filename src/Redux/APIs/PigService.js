import Axios from "./Axios";

const createPigService = (maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID) => {
    const url = `/api/Heo/CreateHeo`;
    const { data } = Axios.post(url, { maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID });
    return data;
}

const getAllPigService = (farmID) => { 
    const url = `/api/Heo/GetAllHeo/${farmID}`;
    const { data } = Axios.get(url);
    return data;
}

const getPigByIDService = (id) => { 
    const url = `/api/Heo/GetHeoByID/${id}`;
    const { data } = Axios.get(url);
    return data;
}

const getPigBoarService = (farmID) => {
    const url = `/api/Heo/GetListHeoDuc?FarmId=${farmID}`;
    const { data } = Axios.get(url);
    return data;
}

const getPigSowService = (farmID) => {
    const url = `/api/Heo/GetListHeoCai?FarmId=${farmID}`;
    const { data } = Axios.get(url);
    return data;
}

const updatePigService = (id, maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID) => { 
    const url = `/api/Heo/UpdateHeo`;
    const { data } = Axios.put(url, { id, maHeo, maGiongHeo, maChuong, gioiTinh, trongLuong, maHeoCha, maHeoMe, isThuanChung, ngaySinh, donGiaNhap, ngayDenTrangTrai, farmID });
    return data;
}

const deletePigService = (id) => { 
    const url = `/api/Heo/DeleteHeo/${id}`;
    const { data } = Axios.delete(url);
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