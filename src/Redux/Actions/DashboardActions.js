import * as DashboardConstants from '../Constants/DashboardConstants';
import * as dashboardAPI from '../APIs/DashboardService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getCommonFieldAction = (farmID) => async (dispatch) => {    
    try {
        dispatch({ type: DashboardConstants.GET_COMMON_FIELD_REQUEST });

        // call api and recive response
        const response = await dashboardAPI.getCommonFieldService(farmID);

        // handle get common field successfully
        dispatch({ type: DashboardConstants.GET_COMMON_FIELD_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, DashboardConstants.GET_COMMON_FIELD_FAIL);
    }
}

const getCoCauHeoAction = (farmID) => async (dispatch) => { 
    try {
        dispatch({ type: DashboardConstants.GET_CO_CAU_HEO_REQUEST });

        // call api and recive response
        const response = await dashboardAPI.getCoCauHeoService(farmID);

        // handle get CoCauHeo successfully
        dispatch({ type: DashboardConstants.GET_CO_CAU_HEO_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, DashboardConstants.GET_CO_CAU_HEO_FAIL);
    }
}

const getTotalIOByMonthAction = (farmID, year) => async (dispatch) => { 
    try {
        dispatch({ type: DashboardConstants.GET_TOTAL_IO_BY_MONTH_REQUEST });

        // call api and recive response
        const response = await dashboardAPI.getToTalIOByMonthService(farmID, year);

        // handle get total IO by month successfully
        dispatch({ type: DashboardConstants.GET_TOTAL_IO_BY_MONTH_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, DashboardConstants.GET_TOTAL_IO_BY_MONTH_FAIL);
    }
}

const getSaleOverviewAction = (farmID, year) => async (dispatch) => { 
    try {
        dispatch({ type: DashboardConstants.GET_SALES_OVERVIEW_REQUEST });

        // call api and recive response
        const response = await dashboardAPI.getSalesOverviewService(farmID, year);

        // handle get sales overview successfully
        dispatch({ type: DashboardConstants.GET_SALES_OVERVIEW_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, DashboardConstants.GET_SALES_OVERVIEW_FAIL);
    }
}

const getInvoiceAction = (farmID, year) => async (dispatch) => { 
    try {
        dispatch({ type: DashboardConstants.GET_INVOICES_REQUEST });

        // call api and recive response
        const response = await dashboardAPI.getInvoiceService(farmID, year);

        // handle get invoice successfully
        dispatch({ type: DashboardConstants.GET_INVOICES_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, DashboardConstants.GET_INVOICES_FAIL);
    }
}

export {
    getCommonFieldAction,
    getCoCauHeoAction,
    getTotalIOByMonthAction,
    getSaleOverviewAction,
    getInvoiceAction
}