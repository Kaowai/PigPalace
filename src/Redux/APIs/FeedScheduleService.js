import Axios from "./Axios";

const getListFoodService = async (FarmID) => {
    const url = `/api/LichChoAn/GetAllThucAn?FarmID=${FarmID}`;
    const response = await Axios.get(url);
    return response.data;
}

const getListFeedScheduleService = async (FarmId) => {
    const url = `/api/LichChoAn/GetAllLichChoAn?FarmId=${FarmId}`;
    const response = await Axios.get(url);
    return response.data;
}

const getListFeedScheduleByUserService = async (FarmID, UserID) => {
    const url = `/api/LichChoAn/GetLichChoAnByNhanVienThucHien?FarmID=${FarmID}&UserID=${UserID}`;
    const response = await Axios.get(url);
    return response.data;
}

const createFeedSchedule1DateService = async (data) => {
    try {
        const url = 'api/LichChoAn/CreateLichChoAn1Ngay';
        const { response } = await Axios.post(url, data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const createFeedScheduleManyDateService = async (data) => {
    try {
        const url = 'api/LichChoAn/CreateLichChoAnNhieuNgay';
        const { response } = await Axios.post(url, data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const confirmFeedScheduleService = async (MaLich) => {
    const url = `/api/LichChoAn/HoanThanhLichChoAn?MaLich=${MaLich}`;
    const response = await Axios.put(url);
    return response.data;
}

const deleteFeedScheduleService = async (MaLich) => {
    const url = `/api/LichChoAn/XoaLichChoAn?MaLich=${MaLich}`;
    const response = await Axios.delete(url);
    return response.data;
}

export {
    getListFoodService,
    getListFeedScheduleService,
    getListFeedScheduleByUserService,
    createFeedSchedule1DateService,
    createFeedScheduleManyDateService,
    confirmFeedScheduleService,
    deleteFeedScheduleService
}