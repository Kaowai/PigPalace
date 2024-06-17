import Axios from "./Axios";

const getProductsService = async (farmID) => {
    const url = `/api/HangHoa/GetListHangHoa?FarmID=${farmID}`;
    const { data } = await Axios.get(url);
    return data;
}

const updateProductService = async (tenHangHoa, loaiHangHoa, tonKho, giaTriToiThieu, tienMuaTrenMotDonVi, donViTinh, ngayHetHan, farmID) => { 
    const url = `/api/HangHoa/UpdateHangHoa`;
    const { data } = await Axios.put(url, { tenHangHoa, loaiHangHoa, tonKho, giaTriToiThieu, tienMuaTrenMotDonVi, donViTinh, ngayHetHan, farmID });
    return data;
}

const deleteProductService = async (farmID, id) => { 
    const url = `/api/HangHoa/DeleteHangHoa?FarmID=${farmID}&tenHangHoa=${id}`;
    const { data } = await Axios.delete(url);
    return data;
}

export {
    getProductsService,
    updateProductService,
    deleteProductService
}