import Axios from './Axios'

const registerService = async (name, gmail, password) => {
    const url = `/api/Account/SignUp?Name=${name}&Gmail=${gmail}&Password=${password} `
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const loginService = async (gmail, password) => {
    const url = `/api/Account/NormalSignIn?Gmail=${gmail}&PassWord=${password}`;
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const loginGoogleService = async (googleID, gmail) => {
    const url = `/api/Account/GoogleSignIn?GoogleID=${googleID}&Gmail=${gmail}`;
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const loginFacebookService = async (facebookID) => {
    const url = `api/Account/FbSignIn?FBID=${facebookID}`;
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const logoutAccountService = () => {
    localStorage.removeItem("userInfo");
    return null;
}

const upgradeAccountService = async (accountID) => {
    const url = `api/Account/UpgradeAccount?AccountID=${accountID}`;
    const { data } = await Axios.put(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const resetPasswordService = async (email, newPassword) => {
    const url = `api/Account/ResetPassword?Email=${email}&NewPassword=${newPassword}`;
    const { data } = await Axios.put(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}


export {
    loginService,
    registerService,
    loginGoogleService,
    loginFacebookService,
    logoutAccountService,
    upgradeAccountService,
    resetPasswordService
}