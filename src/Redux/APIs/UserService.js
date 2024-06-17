import Axios from "./Axios";

const getUserByIDService = async (ID) => {
    const url = `/api/User/GetUserByID?ID=${ID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getUsersByFarmIDService = async (farmID) => {
    const url = `/api/User/GetUsersByFarmID?farmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const deleteUserService = async (userID) => {
    const url = `/api/User/DeleteUser?userID=${userID}`;
    const { data } = await Axios.delete(url);
    return data;
}

const updateUserService = async (UserID, famrID, name, passWord, dateOfBirth, address, email, phoneNumber, sex, coefficientsSalary, roleName) => {
    const url = `/api/User/UpdateUser?UserID=${UserID}`;
    const data = {
        famrID,
        name,
        passWord,
        dateOfBirth,
        address,
        email,
        phoneNumber,
        sex,
        coefficientsSalary,
        roleName
    }
    const { response } = await Axios.put(url, data);
    return response;
}

const signInService = async (UserID, PassWord) => {
    const url = `/api/User/SignIn?UserID=${UserID}&PassWord=${PassWord}`;
    const { data } = await Axios.post(url);
    if (data) localStorage.setItem('userInfo2', data);
    return data;
}

const signUpService = async (famrID, name, passWord, dateOfBirth, address, email, phoneNumber, sex, coefficientsSalary, roleName) => {
    const url = `/api/User/SignUp`;
    const data = {
        famrID,
        name,
        passWord,
        dateOfBirth,
        address,
        email,
        phoneNumber,
        sex,
        coefficientsSalary,
        roleName
    }
    const { response } = await Axios.post(url, data);
}

const refreshTokenService = async (accessToken, refreshToken) => { 
    const url = `/api/User/RefreshToken`;
    const { data } = await Axios.post(url, {accessToken, refreshToken});
    return data;
}

export {
    getUserByIDService,
    getUsersByFarmIDService,
    deleteUserService,
    updateUserService,
    signInService,
    signUpService,
    refreshTokenService
}

