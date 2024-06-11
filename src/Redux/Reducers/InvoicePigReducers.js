import * as InvoicePigConstants from '../Constants/InvoicePigConstants';

export const getListInvoicePigReducer = (state = { invoices: [] }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_REQUEST:
            return { loading: true, invoices: [] }
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_SUCCESS:
            return { loading: false, invoices: action.payload, success: true}
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_RESET:
            return { invoices: [] }
        default:
            return state
    }
}

export const getListInvoicePigImportReducer = (state = { invoices: [] }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_REQUEST:
            return { loading: true, invoices: [] }
        case InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_SUCCESS:
            return { loading: false, invoices: action.payload, success: true}
        case InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.GET_LIST_INVOICE_IMPORT_PIG_RESET:
            return { invoices: [] }
        default:
            return state
    }
}

export const getListPigInInvoiceReducer = (state = { pigs: [] }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_REQUEST:
            return { loading: true, pigs: [] }
        case InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_SUCCESS:
            return { loading: false, pigs: action.payload, success: true}
        case InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.GET_LIST_PIG_IN_INVOICE_PIG_RESET:
            return { pigs: [] }
        default:
            return state
    }
}

export const getListInvoicePigExportReducer = (state = { invoices: [] }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_REQUEST:
            return { loading: true, invoices: [] }
        case InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_SUCCESS:
            return { loading: false, invoices: action.payload, success: true}
        case InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.GET_LIST_INVOICE_EXPORT_PIG_RESET:
            return { invoices: [] }
        default:
            return state
    }
}

export const createInvoicePigImportReducer = (state = { invoice: {} }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_REQUEST:
            return { loading: true, invoice: {} }
        case InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_SUCCESS:
            return { loading: false, invoice: action.payload, success: true}
        case InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.CREATE_INVOICE_PIG_IMPORT_RESET:
            return { invoice: {} }
        default:
            return state
    }
}

export const confirmInvoiceImportPigReducer = (state = { invoice: {} }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_REQUEST:
            return { loading: true, invoice: {} }
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_SUCCESS:
            return { loading: false, invoice: action.payload, success: true}
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_IMPORT_RESET:
            return { invoice: {} }
        default:
            return state
    }
}

export const deleteInvoicePigReducer = (state = { invoice: {} }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.DELETE_INVOICE_PIG_REQUEST:
            return { loading: true, invoice: {} }
        case InvoicePigConstants.DELETE_INVOICE_PIG_SUCCESS:
            return { loading: false, invoice: action.payload, success: true}
        case InvoicePigConstants.DELETE_INVOICE_PIG_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.DELETE_INVOICE_PIG_RESET:
            return { invoice: {} }
        default:
            return state
    }
}

export const createInvoicePigExportReducer = (state = { invoice: {} }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_REQUEST:
            return { loading: true, invoice: {} }
        case InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_SUCCESS:
            return { loading: false, invoice: action.payload, success: true}
        case InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.CREATE_INVOICE_PIG_EXPORT_RESET:
            return { invoice: {} }
        default:
            return state
    }
}

export const confirmInvoicePigExportReducer = (state = { invoice: {} }, action) => { 
    switch (action.type) {
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_REQUEST:
            return { loading: true, invoice: {} }
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_SUCCESS:
            return { loading: false, invoice: action.payload, success: true}
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.CONFIRM_INVOICE_PIG_EXPORT_RESET:
            return { invoice: {} }
        default:
            return state
    }
}

export const getListInvoicePigByUserReducer = (state = { invoices: [] }, action) => { 
    switch(action.type) {
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_REQUEST:
            return { loading: true, invoices: [] }
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_SUCCESS:
            return { loading: false, invoices: action.payload, success: true }
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_FAIL:
            return { loading: false, error: action.payload }
        case InvoicePigConstants.GET_LIST_INVOICE_PIG_BY_USER_RESET:
            return { invoices: [] }
        default:
            return state
    }
}