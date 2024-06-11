import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as Account from "./Reducers/AccountReducers";
import * as Farm from "./Reducers/FarmReducers";
import * as Breed from "./Reducers/BreedReducers";
import * as Role from "./Reducers/RoleReducers";
import * as Barn from "./Reducers/BarnReducers";
import * as Dashboard from "./Reducers/DashboardReducers";
import * as Product from "./Reducers/ProductReducers";
import * as Pig from "./Reducers/PigReducers";
import * as InvoiceProduct from "./Reducers/InvoiceProductReducers";
import * as InvoicePig from "./Reducers/InvoicePigReducers";
import * as FeedSchedule from "./Reducers/FeedScheduleReducers";
import * as PregnancySchedule from "./Reducers/PregnancyScheduleReducers";
import * as Parameter from "./Reducers/ParameterReducers";
import * as VaccineSchedule from "./Reducers/VaccineScheduleReducers";
import * as User from "./Reducers/UserReducers";
const rootReducer = combineReducers({
  // user reducers
  accountLogin: Account.accountLoginReducer,
  accountRegister: Account.accountRegisterReducer,
  accountResetPassword: Account.accountResetPasswordReducer,
  accountGoogleLogin: Account.accountGoogleLoginReducer,
  accountFacebookLogin: Account.accountFacebookLoginReducer,
  accountUpgradeAccount: Account.accountUpgradeAccountReducer,
  accountLogoutAccount: Account.accountLogoutAccountReducer,

  // farm reducers
  farmGet: Farm.farmGetReducer,
  farmCreate: Farm.farmCreateReducer,
  farmUpdate: Farm.farmUpdateReducer,

  // pig reducers
  breedCreate: Breed.breedCreateReducer,
  breedGetAllByFarmID: Breed.breedGetByFarmIdReducer,
  breedGetByID: Breed.breedGetByIdReducer,
  breedUpdate: Breed.breedUpdateReducer,
  breedDelete: Breed.deleteBreedReducer,

  // role reducers
  roleCreate: Role.createRoleReducer,
  roleGetAll: Role.getRoleReducer,

  // barn reducers
  barnCreate: Barn.createBarnReducer,
  barnGetAll: Barn.getAllBarnReducer,
  barnGetByID: Barn.getBarnByIDReducer,
  barnUpdate: Barn.updateBarnReducer,
  barnDelete: Barn.deleteBarnReducer,

  // dashboard reducers
  commonFieldGet: Dashboard.getCommonFieldReducer,
  coCauHeoGet: Dashboard.getCoCauHeoReducer,
  totalIOByMonthGet: Dashboard.getTotalIOByMonthReducer,
  salesOverviewGet: Dashboard.getSaleOverviewReducer,
  invoiceGet: Dashboard.getInvoiceReducer,

  // product reducers
  productGetAll: Product.getProductReducer,

  // pig reducers
  createPig: Pig.createPigReducer,
  getPigByID: Pig.getPigByIdReducer,
  getPigBoar: Pig.getPigBoarReducer,
  getPigSow: Pig.getPigSowReducer,
  updatePig: Pig.updatePigReducer,
  deletePig: Pig.deletePigReducer,


  // invoice product reducers
  createInvoiceProduct: InvoiceProduct.createInvoiceProductReducer,
  updateInvoiceProduct: InvoiceProduct.updateInvoiceProductReducer,
  confirmInvoiceProduct: InvoiceProduct.confirmInvoiceProductReducer,
  deleteInvoiceProduct: InvoiceProduct.deleteInvoiceProductReducer,
  getInvoiceProduct: InvoiceProduct.getInvoiceProductReducer,

  // invoice pig reducers
  getListInvoicePig: InvoicePig.getListInvoicePigExportReducer,
  getListInvoicePigImport: InvoicePig.getListInvoicePigImportReducer,
  getListPigInInvoice: InvoicePig.getListPigInInvoiceReducer,
  getListInvoicePigExport: InvoicePig.getListInvoicePigExportReducer,
  createInvoicePigImport: InvoicePig.createInvoicePigImportReducer,
  confirmInvoicePigImport: InvoicePig.confirmInvoiceImportPigReducer,
  deleteInvoicePig: InvoicePig.deleteInvoicePigReducer,
  createInvoicePigExport: InvoicePig.createInvoicePigExportReducer,
  confirmInvoicePigExport: InvoicePig.confirmInvoicePigExportReducer,
  getListInvoicePigByUser: InvoicePig.getListInvoicePigByUserReducer,

  // feed schedule reducers
  getAllFood: FeedSchedule.getListFoodReducer,
  getAllFeedSchedule: FeedSchedule.getListFeedScheduleReducer,
  getFeedScheduleByUser: FeedSchedule.getListFeedScheduleByUserReducer,
  createFeedSchedule1Date: FeedSchedule.createFeedSchedule1DateReducer,
  createFeedScheduleManyDate: FeedSchedule.createFeedScheduleManyDateReducer,
  deleteFeedSchedule: FeedSchedule.deleteFeedScheduleReducer,
  confirmFeedSchedule: FeedSchedule.confirmFeedScheduleReducer,

  // pregnancy schedule reducers
  getAllPregnancySchedule: PregnancySchedule.getAllPregnancyScheduleReducer,
  getPregnancyScheduleByUser: PregnancySchedule.getPregnancyScheduleByUserReducer,
  getPigById: PregnancySchedule.getPigByIdReducer,
  createPregnancySchedule: PregnancySchedule.createPregnancyScheduleReducer,
  confirmPregnancySchedule: PregnancySchedule.confirmPregnancyReducer,
  confirmFarrowingSuccess: PregnancySchedule.confirmFarrowingSuccessReducer,
  confirmFarrowingFailure: PregnancySchedule.confirmFarrowingFailureReducer,
  deletePregnancySchedule: PregnancySchedule.deletePregnancyScheduleReducer,

  // parameter reducers
  getListParameter: Parameter.getListParameterReducer,
  updateParameter: Parameter.updateParameterReducer,

  // vaccine schedule reducers
  getAllMedicine: VaccineSchedule.getAllMedicineReducer,
  getAllVaccine: VaccineSchedule.getAllVacineReducer,
  getAllVaccineSchedule: VaccineSchedule.getALlVaccineScheduleReducer,
  getVaccineScheduleByUser: VaccineSchedule.getVaccineScheduleByUserReducer,  
  getPigInVaccineSchedule: VaccineSchedule.getPigInVaccineScheduleReducer,
  createVaccineSchedule: VaccineSchedule.createVaccineScheduleReducer,
  confirmVaccineSchedule: VaccineSchedule.confirmVaccineScheduleReducer,
  createVaccineShedule: VaccineSchedule.createVaccineScheduleReducer,

  // user reducers
  getUserByID: User.getUserByIDReducer,
  getUserByFarmID: User.getUserByFarmIDReducer,
  deleteUser: User.deleteUserReducer,
  updateUser: User.updateUserReducer,
  signIn: User.signInReducer,
  signUp: User.signUpReducer,
  refreshToken: User.refreshTokenReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// initialState
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
