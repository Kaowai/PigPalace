import Axios from "./Axios";

const getFarmService = async (AccountID) => {
    const url = `/api/Farm/GetFarm?AccoundID=${AccountID}`;
    const { data } = await Axios.get(url);
    return data;
}
const createFarmService = async (AccountID, name) => {
    const url = `/api/Farm/CreateFarm?AccountID=${AccountID}&name=${name}`;
    const { data } = await Axios.post(url);
    return data;
}
const changeFarmNameService = async (FarmID, Name) => {
    const url = `/api/Farm/ChangeFarmName?FarmID=${FarmID}&Name=${Name}`;
    const { data } = await Axios.put(url);
    return data;
}

export {
    getFarmService,
    createFarmService,
    changeFarmNameService
}