import * as yup from 'yup';

// pig import validation

const InvoiceValidation = yup.object().shape({
    Note: yup.string().required("Note is required").trim(),
    TenCongTy: yup.string().required("Company Name is required").trim(),
    TenDoiTac: yup.string().required("Partner Name is required").trim(),
    DiaChi: yup.string().required("Address is required").trim(),
    SoDienThoai: yup.string().required("Phone Number is required").trim(),
    Email: yup.string().email().required("Email is required").trim(),
    
});

const InvoiceExportValidation = yup.object().shape({
    Note: yup.string().required("Note is required").trim(),
    TenCongTy: yup.string().required("Company Name is required").trim(),
    TenDoiTac: yup.string().required("Partner Name is required").trim(),
    DiaChi: yup.string().required("Address is required").trim(),
    SoDienThoai: yup.string().required("Phone Number is required").trim(),
    Email: yup.string().email().required("Email is required").trim(),
    TienTrenDVT: yup.number().required("Amount is required").positive("Amount must be positive").integer("Amount must be an integer"),
});

const BarnValidation = yup.object().shape({
    ghiChu: yup.string().required("Barn nam is required").trim(),
    sucChuaToiDa: yup.number().required("Capacity is required").positive("Capacity must be positive").integer("Capacity must be an integer"),
});
const BreedValidation = yup.object().shape({
    tenGiongHeo: yup.string().required("Barn nam is required").trim(),
    moTa: yup.string().trim(),
});
const PigValidation = yup.object().shape({
    maChuong: yup.string().required("Pig Barn is required").trim(),
    maGiongHeo: yup.string().required("Breed is required").trim(),
    maChuongHeo: yup.string().required("Pig Barn is required").trim(),
    maHeoCha: yup.string().required("Father Pig is required").trim(),
    maHeoMe: yup.string().required("Mother Pig is required").trim(),
    gioiTinh: yup.string().required("Gender is required").trim(),
    trongLuong: yup.number().required("Weight is required").positive("Weight must be positive").integer("Weight must be an integer"),
    donGiaNhap: yup.number().required("Cost is required").positive("Cost must be positive").integer("Cost must be an integer"),
});

const FarmValidation = yup.object().shape({
    ghiChu: yup.string().required("Note is required").trim(),
    tienTrenDVT: yup.number().required("Amount is required").positive("Amount must be positive").integer("Amount must be an integer"),
    tenKhachHang: yup.string().required("Partner Name is required").trim(),
    diaChi: yup.string().required("Address is required").trim(),
    sdt: yup.string().required("Phone Number is required").trim(),
    email: yup.string().email().required("Email is required").trim(),
    tenCongTy: yup.string().required("Company Name is required").trim(),
    tenHangHoa: yup.string().required("Product Name is required").trim(),
    loaiHangHoa: yup.string().required("Product Type is required").trim(),
    soLuong: yup.number().required("Quantity is required").positive("Quantity must be positive").integer("Quantity must be an integer"),
})

const ParameterValidation = yup.object().shape({
    trongLuongToiThieuXuatChuong: yup.number().required("Minimum Pig Weight Export is required").positive("Minimum Pig Weight Export must be positive").integer("Minimum Pig Weight Export must be an integer"),
    trongLuongToiDaXuatChuong: yup.number().required("Maximum Pig Weight Export is required").positive("Maximum Pig Weight Export must be positive").integer("Maximum Pig Weight Export must be an integer"),
    tuoiToiThieuXuatChuong: yup.number().required("Minimum Age Export is required").positive("Minimum Age Export must be positive").integer("Minimum Age Export must be an integer"),
    tuoiToiDaXuatChuong: yup.number().required("Maximum Age Export is required").positive("Maximum Age Export must be positive").integer("Maximum Age Export must be an integer"),
    tuoiNhapDanHeoCon: yup.number().required("Minimum Age Import is required").positive("Minimum Age Import must be positive").integer("Minimum Age Import must be an integer"),
    giaoPhoiCanHuyetToiThieu: yup.number().required("Minimum Blood Mating is required").positive("Minimum Blood Mating must be positive").integer("Minimum Blood Mating must be an integer"),
    tuoiPhoiGiongToiThieuHeoDuc: yup.number().required("Minimum Age Mating Boar is required").positive("Minimum Age Mating Boar must be positive").integer("Minimum Age Mating Boar must be an integer"),
    tuoiPhoiGiongToiThieuHeoCai: yup.number().required("Minimum Age Mating Sow is required").positive("Minimum Age Mating Sow must be positive").integer("Minimum Age Mating Sow must be an integer"),
    soNgayToiThieuPhoiGiongLai: yup.number().required("Minimum Days Mating Again is required").positive("Minimum Days Mating Again must be positive").integer("Minimum Days Mating Again must be an integer"),
});

const ProductValidation = yup.object().shape({
    tenHangHoa: yup.string().required("Product Name is required").trim(),
    loaiHangHoa: yup.string().required("Product Type is required").trim(),
    tonKho: yup.number().required("Stock is required").positive("Stock must be positive").integer("Stock must be an integer"),
    giaTriToiThieu: yup.number().required("Minimum Value is required").positive("Minimum Value must be positive").integer("Minimum Value must be an integer"),
    tienMuaTrenMotDonVi: yup.number().required("Cost Per Unit is required").positive("Cost Per Unit must be positive").integer("Cost Per Unit must be an integer"),
    donViTinh: yup.string().required("Unit is required").trim(),
});

const VaccineScheduleValidation = yup.object().shape({
    maHangHoa: yup.string().required("Vaccine is required").trim(),
    lieuLuong: yup.number().required("Quantity is required").positive("Quantity must be positive").integer("Quantity must be an integer"),
});

const PregnancyScheduleValidation = yup.object().shape({
    ghiChu: yup.string().required("Note is required").trim(),
})

const FeedScheduleValidation = yup.object().shape({
    maHangHoa: yup.string().required("Food is required").trim(),
    soLuongCho1ConHeo1Ngay: yup.number().required("Quantity is required").positive("Quantity must be positive").integer("Quantity must be an integer"),
    firstFeedingTime: yup.string().required("First Feeding Time is required"),
})

const PregnancySuccessValidation = yup.object().shape({
    SoHeoDuc: yup.number().required("Amount of Male is required").positive("Amount of Male must be positive").integer("Amount of Male must be an integer"),
    SoHeoCai: yup.number().required("Amount of Female is required").positive("Amount of Female must be positive").integer("Amount of Female must be an integer"),
    SoHeoChet: yup.number().required("Amount of Dead is required").positive("Amount of Dead must be positive").integer("Amount of Dead must be an integer"),
    SoHeoTat: yup.number().required("Amount of disabilities is required").positive("Amount of disabilities must be positive").integer("Amount of disabilities must be an integer"),
});

const PregnancyFailureValidation = yup.object().shape({
    NguyenNhan: yup.string().required("Reason is required").trim(),
    CachGiaiQuyet: yup.string().required("Solution is required").trim(),
    GhiChuTaiSaoThatBai: yup.string().required("Note is required").trim(),
});

export {
    InvoiceValidation,
    PigValidation,
    FarmValidation,
    BarnValidation,
    BreedValidation,
    ParameterValidation,
    ProductValidation,
    VaccineScheduleValidation,
    PregnancyScheduleValidation,
    FeedScheduleValidation,
    PregnancySuccessValidation,
    PregnancyFailureValidation,
    InvoiceExportValidation
}

