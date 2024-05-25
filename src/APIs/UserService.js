import Axios from './Axios'

const registerService = async (name, gmail, password) => {
    const url = `/api/Farm/SignUp?Name=${name}&Gmail=${gmail}&Password=${password} `
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const loginService = async (gmail, password) => {
    const url = `/api/Farm/NormalSignIn?Gmail=${gmail}&PassWord=${password}`;
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const loginGoogleService = async (googleID) => {
    const url = `/api/Farm/GoogleSignIn?GoogleID=${googleID}`;
    const { data } = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const loginFacebookService = async(facebookID) => {
    const url = `api/Farm/FbSignIn?FBID=${facebookID}`;
    const {data} = await Axios.post(url);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}
const testService = async () => {
    return "Hello";
}

export {
    loginService,
    registerService,
    loginGoogleService,
    loginFacebookService,
    testService
}