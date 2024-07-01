import Axios from "./Axios";

const getCommonFieldService = async (farmID) => {
    const url = `/api/Dashboard/GetCommonField?FarmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getCoCauHeoService = async (farmID) => {
    const url = `/api/Dashboard/GetCoCauHeo?FarmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const getToTalIOByMonthService = async (farmID, year) => {
    const url = `/api/Dashboard/GetTotalImportAndExportPigByMonth?FarmID=${farmID}&Year=${year}`;
    const { data } = await Axios.get(url);
    return data;
}

const getSalesOverviewService = async (farmID, year) => {
    const url = `/api/Dashboard/GetSalesOverview?FarmID=${farmID}&Year=${year}`;
    const { data } = await Axios.get(url);
    return data;
}

const getInvoiceService = async (farmID, year) => {
    const url = `/api/Dashboard/GetInvoices?FarmID=${farmID}&Year=${year}`;
    const { data } = await Axios.get(url);
    return data;
}

export {
    getCommonFieldService,
    getCoCauHeoService,
    getToTalIOByMonthService,
    getSalesOverviewService,
    getInvoiceService
}