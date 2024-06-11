import Axios from "./Axios";

const getAllMedicineService = async (FarmID) => {
    const url = `/api/LichTiem/GetAllThuoc?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getAllVaccineService = async (FarmID) => {
    const url = `/api/LichTiem/GetAllVaccin?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getAllVaccineScheduleService = async (FarmID) => { 
    const url = `/api/LichTiem/GetAllLichTiem?FarmID=${FarmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getAllVaccineScheduleByUserService = async (FarmID, UserID) => { 
    const url = `/api/LichTiem/GetAllLichTiemByUser?FarmID=${FarmID}&UserID=${UserID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getVaccineScheduleByPigIDService = async (HeoID) => { 
    const url = `/api/LichTiem/GetByHeoID?HeoID=${HeoID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getPigInVaccineScheduleService = async (MaLichTiem) => { 
    const url = `/api/LichTiem/GetHeoTrongLichTiem?MaLichTiem=${MaLichTiem}`;
    const { data } = await Axios.get(url);
    return data;
}

const createVaccineScheduleService = async (ngayTiem, maHangHoa, lieuLuong, userID, farmID, listHeoTiem) => { 
    const url = `/api/LichTiem/CreateLichTiem`;
    const { data } = await Axios.post(url, {ngayTiem, maHangHoa, lieuLuong, userID, farmID, listHeoTiem});
    return data;
}

const confirmVaccineScheduleService = async (MaLichTiem) => { 
    const url = `/api/LichTiem/HoanThanhLichTiem?MaLichTiem=${MaLichTiem}`;
    const { data } = await Axios.put(url);
    return data;
}

export {
    getAllMedicineService,
    getAllVaccineService,
    getAllVaccineScheduleService,
    getAllVaccineScheduleByUserService,
    getVaccineScheduleByPigIDService,
    getPigInVaccineScheduleService,
    createVaccineScheduleService,
    confirmVaccineScheduleService
}