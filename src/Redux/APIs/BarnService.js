import Axios from "./Axios";

const createBarnService = async (tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID) => {
    const url = '/api/ChuongHeo/CreateChuongHeo';
    const { data } = await Axios.post(url, { tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID });
    return data;
}

const getAllBarnService = async (FarmId) => {
    const url = `/api/ChuongHeo/GetAllChuongHeo/${FarmId}`;
    const { data } = await Axios.get(url);
    return data;
}

const getBarnByIDService = async (id) => {
    const url = `/api/ChuongHeo/GetChuongHeoById/${id}`;
    const { data } = await Axios.get(url);
    return data;
}

const updateBarnService = async(maChuong, tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID) => { 
    const url = '/api/ChuongHeo/UpdateChuongHeo';
    const { data } = await Axios.put(url, { maChuong, tinhTrang, soLuongHeo, ghiChu, sucChuaToiDa, farmID });
    return data;
}

const deleteBarnService = async (id) => { 
    const url = `/api/ChuongHeo/DeleteChuongHeoByID/${id}`;
    const { data } = await Axios.delete(url);
    return data;
}

export {
    createBarnService,
    getAllBarnService,
    getBarnByIDService,
    updateBarnService,
    deleteBarnService
}