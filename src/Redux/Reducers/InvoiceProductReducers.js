import * as InvoiceProductConstants from '../Constants/InvoiceProductConstants';

export const getInvoiceProductReducer = (state = { invoiceProducts: [] }, action) => { 
    switch (action.type) {
        case InvoiceProductConstants.GET_LIST_INVOICE_REQUEST:
            return { loading: true, invoiceProducts: [] }
        case InvoiceProductConstants.GET_LIST_INVOICE_SUCCESS:
            return { loading: false, invoiceProducts: action.payload, succcess: true}
        case InvoiceProductConstants.GET_LIST_INVOICE_FAIL:
            return { loading: false, error: action.payload }
        case InvoiceProductConstants.GET_LIST_INVOICE_RESET:
            return { invoiceProducts: [] }
        default:
            return state
    }
}

export const createInvoiceProductReducer = (state = { invoiceProduct: {} }, action) => { 
    switch (action.type) {
        case InvoiceProductConstants.CREATE_INVOICE_REQUEST:
            return { loading: true, invoiceProduct: {} }
        case InvoiceProductConstants.CREATE_INVOICE_SUCCESS:
            return { loading: false, invoiceProduct: action.payload, succcess: true}
        case InvoiceProductConstants.CREATE_INVOICE_FAIL:
            return { loading: false, error: action.payload }
        case InvoiceProductConstants.CREATE_INVOICE_RESET:
            return { invoiceProduct: {} }
        default:
            return state
    }
}

export const updateInvoiceProductReducer = (state = { invoiceProduct: {} }, action) => { 
    switch (action.type) {
        case InvoiceProductConstants.UPDATE_INVOICE_REQUEST:
            return { loading: true, invoiceProduct: {} }
        case InvoiceProductConstants.UPDATE_INVOICE_SUCCESS:
            return { loading: false, invoiceProduct: action.payload, succcess: true}
        case InvoiceProductConstants.UPDATE_INVOICE_FAIL:
            return { loading: false, error: action.payload }
        case InvoiceProductConstants.UPDATE_INVOICE_RESET:
            return { invoiceProduct: {} }
        default:
            return state
    }
}

export const confirmInvoiceProductReducer = (state = { invoiceProduct: {} }, action) => { 
    switch (action.type) {
        case InvoiceProductConstants.CONFIRM_INVOICE_REQUEST:
            return { loading: true, invoiceProduct: {} }
        case InvoiceProductConstants.CONFIRM_INVOICE_SUCCESS:
            return { loading: false, invoiceProduct: action.payload, succcess: true}
        case InvoiceProductConstants.CONFIRM_INVOICE_FAIL:
            return { loading: false, error: action.payload }
        case InvoiceProductConstants.CONFIRM_INVOICE_RESET:
            return { invoiceProduct: {} }
        default:
            return state
    }
}

export const deleteInvoiceProductReducer = (state = { invoiceProduct: {} }, action) => { 
    switch (action.type) {
        case InvoiceProductConstants.DELETE_INVOICE_REQUEST:
            return { loading: true, invoiceProduct: {} }
        case InvoiceProductConstants.DELETE_INVOICE_SUCCESS:
            return { loading: false, invoiceProduct: action.payload, succcess: true}
        case InvoiceProductConstants.DELETE_INVOICE_FAIL:
            return { loading: false, error: action.payload }
        case InvoiceProductConstants.DELETE_INVOICE_RESET:
            return { invoiceProduct: {} }
        default:
            return state
    }
}
