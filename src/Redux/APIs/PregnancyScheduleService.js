import Axios from "./Axios";

const getAllPregnancyScheduleService = async (FarmId) => {
    const url = `/api/LichPhoiGiong/GetAllLichPhoiGiong?FarmId=${FarmId}`;
    const { data } = await Axios.get(url);
    return data;
}

const getPregnancyScheduleByUserService = async (FarmID, UserID) => {
    const url = `/api/LichPhoiGiong/GetLichPhoiGiongByNhanVienThucHien?FarmID=${FarmID}&UserID=${UserID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getPigByIDService = async (HeoID) => {
    const url = `api/LichPhoiGiong/GetByHeoID?HeoID=${HeoID}`;
    const { data } = await Axios.get(url);
    return data;
}

const createPregnancyScheduleService = async (data) => {
    try {
        const url = '/api/LichPhoiGiong/CreateLPG';
        const { dataresponse } = await Axios.post(url, data);;
        return dataresponse;
    } catch (error) {
        return error;
    }
    


}

const confirmPregnancyService = async (MaLich, NgayDauThai, IsSuccess, FarmID) => {
    const url = `/api/LichPhoiGiong/XacNhanDauThai?MaLich=${MaLich}&NgayDauThai=${NgayDauThai}&IsSuccess=${IsSuccess}&FarmID=${FarmID}`;

    const { data } = await Axios.put(url);
    return data;
}

const confirmFarrowingSuccessService = async (MaLich, NgayDeChinhThuc, SoHeoConSong, SoHeoDuc, SoHeoCai, SoHeoChet, SoHeoTat) => {
    const url = `/api/LichPhoiGiong/XacNhanDeThanhCong?MaLich=${MaLich}&NgayDeChinhThuc=${NgayDeChinhThuc}&SoHeoConSong=${SoHeoConSong}&SoHeoDuc=${SoHeoDuc}&SoHeoCai=${SoHeoCai}&SoHeoChet=${SoHeoChet}&SoHeoTat=${SoHeoTat}`;
    console.log(url);

    const { data } = await Axios.put(url);
    console.log(data);
    return data;
}

const confirmFarrowingFailureService = async (MaLich, NguyenNhan, CachGiaiQuyet, GhiChuTaiSaoThatBai) => {
    const url = `/api/LichPhoiGiong/XacNhanDeThatBai?MaLich=${MaLich}&NguyenNhan=${NguyenNhan}&CachGiaiQuyet=${CachGiaiQuyet}&GhiChuTaiSaoThatBai=${GhiChuTaiSaoThatBai}`;

    const { data } = await Axios.put(url);
    return data;
}

const deletePregnancyScheduleService = async (MaLich) => {
    const url = `/api/LichPhoiGiong/XoaLichPhoiGiong?MaLich=${MaLich}`;
    const { data } = await Axios.delete(url);
    return data;
}

export {
    getAllPregnancyScheduleService,
    getPregnancyScheduleByUserService,
    getPigByIDService,
    createPregnancyScheduleService,
    confirmPregnancyService,
    confirmFarrowingSuccessService,
    confirmFarrowingFailureService,
    deletePregnancyScheduleService
}
