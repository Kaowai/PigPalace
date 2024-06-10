import * as ProductConstants from '../Constants/ProductConstants';
import * as productAPI from '../APIs/ProductService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getProductAction = (farmID) => async (dispatch) => { 
    try {
        dispatch({ type: ProductConstants.GET_ALL_PRODUCT_REQUEST });

        // call api and recive response
        const response = await productAPI.getProductsService(farmID);

        // handle get product successfully
        dispatch({ type: ProductConstants.GET_ALL_PRODUCT_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, ProductConstants.GET_ALL_PRODUCT_FAIL);
    }
}