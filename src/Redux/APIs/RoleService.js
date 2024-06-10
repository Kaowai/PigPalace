import Axios from "./Axios";

const createRoleService = async (farmID, roleName, basicSalary, description) => {
    const url = '/api/ChucVu/CreateChucVu';
    const { data } = await Axios.post(url, { farmID, roleName, basicSalary, description });
    return data;
}

const getRoleService = async (farmID) => {
    const url = `/api/ChucVu/GetAllChucVu?FarmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

export {
    createRoleService,
    getRoleService
}