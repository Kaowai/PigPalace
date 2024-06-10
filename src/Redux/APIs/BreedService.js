import Axios from "./Axios";

const createBreedService = async (tenGiongHeo, moTa, farmID) => {
    const url = `/api/GiongHeo/CreateGiongHeo`;
    const { data } = await Axios.post(url, { tenGiongHeo, moTa, farmID });
    return data;
}

const getBreedByFarmIDService = async (farmID) => {
    const url = `/api/GiongHeo/GetAllGiongHeo/${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getBreedByIDService = async (id) => {
    const url = `/api/GiongHeo/GetGiongHeoByID/${id}`;
    const { data } = await Axios.get(url);
    return data;
}

const updateBreedService = async (id, tenGiongHeo, moTa, farmID) => {
    const url = `/api/GiongHeo/UpdateGiongHeo`;
    const { data } = await Axios.put(url, { id, tenGiongHeo, moTa, farmID });
    return data;
}

const deleteBreedService = async (id) => { 
    const url = `/api/GiongHeo/DeleteGiongHeo/${id}`;
    const { data } = await Axios.delete(url);
    return data;
}

export {
    createBreedService,
    getBreedByFarmIDService,
    getBreedByIDService,
    updateBreedService,
    deleteBreedService
}