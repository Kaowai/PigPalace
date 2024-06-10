import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/UserReducers";
import * as Farm from "./Reducers/FarmReducers";
import * as Breed from "./Reducers/BreedReducers";
import * as Role from "./Reducers/RoleReducers";
import * as Barn from "./Reducers/BarnReducers";
import * as Dashboard from "./Reducers/DashboardReducers";
import * as Product from "./Reducers/ProductReducers";
import * as Pig from "./Reducers/PigReducers";
import * as InvoiceProduct from "./Reducers/InvoiceProductReducers";
const rootReducer = combineReducers({
  // user reducers
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userResetPassword: User.userResetPasswordReducer,
  userGoogleLogin: User.userGoogleLoginReducer,
  userFacebookLogin: User.userFacebookLoginReducer,
  userUpgradeAccount: User.userUpgradeAccountReducer,
  userLogoutAccount: User.userLogoutAccountReducer,

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
