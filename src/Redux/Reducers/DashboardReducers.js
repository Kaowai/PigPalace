import * as DashboardConstants from '../Constants/DashboardConstants';

export const getCommonFieldReducer = (state = {}, action) => {
    switch (action.type) {
        case DashboardConstants.GET_COMMON_FIELD_REQUEST:
            return { loading: true };
        case DashboardConstants.GET_COMMON_FIELD_SUCCESS:
            return { loading: false, commonField: action.payload, isSuccess: true};
        case DashboardConstants.GET_COMMON_FIELD_FAIL:
            return { loading: false, error: action.payload };
        case DashboardConstants.GET_COMMON_FIELD_RESET:
            return {};
        default:
            return state;
    }
}

export const getCoCauHeoReducer = (state = {}, action) => { 
    switch (action.type) {
        case DashboardConstants.GET_CO_CAU_HEO_REQUEST:
            return { loading: true };
        case DashboardConstants.GET_CO_CAU_HEO_SUCCESS:
            return { loading: false, coCauHeo: action.payload, isSuccess: true };
        case DashboardConstants.GET_CO_CAU_HEO_FAIL:
            return { loading: false, error: action.payload };
        case DashboardConstants.GET_CO_CAU_HEO_RESET:
            return {};
        default:
            return state;
    }
}

export const getTotalIOByMonthReducer = (state = {}, action) => {
    switch (action.type) {
        case DashboardConstants.GET_TOTAL_IO_BY_MONTH_REQUEST:
            return { loading: true };
        case DashboardConstants.GET_TOTAL_IO_BY_MONTH_SUCCESS:
            return { loading: false, totalIOByMonth: action.payload, isSuccess: true };
        case DashboardConstants.GET_TOTAL_IO_BY_MONTH_FAIL:
            return { loading: false, error: action.payload };
        case DashboardConstants.GET_TOTAL_IO_BY_MONTH_RESET:
            return {};
        default:
            return state;
    }
}

export const getSaleOverviewReducer = (state = {}, action) => {
    switch (action.type) {
        case DashboardConstants.GET_SALES_OVERVIEW_REQUEST:
            return { loading: true };
        case DashboardConstants.GET_SALES_OVERVIEW_SUCCESS:
            return { loading: false, salesOverview: action.payload, isSuccess: true };
        case DashboardConstants.GET_SALES_OVERVIEW_FAIL:
            return { loading: false, error: action.payload };
        case DashboardConstants.GET_SALES_OVERVIEW_RESET:
            return {};
        default:
            return state;
    }
}

export const getInvoiceReducer = (state = {}, action) => {
    switch (action.type) {
        case DashboardConstants.GET_INVOICES_REQUEST:
            return { loading: true };
        case DashboardConstants.GET_INVOICES_SUCCESS:
            return { loading: false, invoices: action.payload, isSuccess: true };
        case DashboardConstants.GET_INVOICES_FAIL:
            return { loading: false, error: action.payload };
        case DashboardConstants.GET_INVOICES_RESET:
            return {};
        default:
            return state;
    }
}