import Axios from "./Axios";

const getProductsService = async (farmID) => {
    const url = `/api/HangHoa/GetListHangHoa?FarmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}
export {
    getProductsService
}