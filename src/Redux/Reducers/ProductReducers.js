import * as ProductConstants from '../Constants/ProductConstants';

export const getProductReducer = (state = { products: [] }, action) => { 
    switch (action.type) {
        case ProductConstants.GET_ALL_PRODUCT_REQUEST:
            return { loading: true, products: [] }
        case ProductConstants.GET_ALL_PRODUCT_SUCCESS:
            return { loading: false, products: action.payload }
        case ProductConstants.GET_ALL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        case ProductConstants.GET_ALL_PRODUCT_RESET:
            return { products: [] }
        default:
            return state
    }
}