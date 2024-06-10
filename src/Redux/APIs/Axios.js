import axios from "axios"

const Axios = axios.create({
    baseURL: 'https://localhost:7109'
});

export default Axios;