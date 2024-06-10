import * as FarmConstants from '../Constants/FarmConstants';
import * as farmAPI from '../APIs/FarmService';
import { ErrorsAction, tokenProtection } from '../Protection';

const getFarmAction = (AccountID) => async (dispatch) => {
    try {
        dispatch({ type: FarmConstants.GET_FARM_REQUEST });

        // call api and recive response
        const response = await farmAPI.getFarmService(AccountID);

        // handle get farm successfully
        dispatch({ type: FarmConstants.GET_FARM_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FarmConstants.GET_FARM_FAIL);
    }
}
const createFarmAction = (AccountID, name) => async (dispatch) => {
    try {
        dispatch({ type: FarmConstants.CREATE_FARM_REQUEST });

        // call api and recive response
        const response = await farmAPI.createFarmService(AccountID, name);

        // handle create farm successfully
        dispatch({ type: FarmConstants.CREATE_FARM_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FarmConstants.CREATE_FARM_FAIL);
    }
}

const changeFarmNameAction = (FarmID, Name) => async (dispatch) => { 
    try {
        dispatch({ type: FarmConstants.UPDATE_FARM_REQUEST });

        // call api and recive response
        const response = await farmAPI.changeFarmNameService(FarmID, Name);

        // handle update farm successfully
        dispatch({ type: FarmConstants.UPDATE_FARM_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, FarmConstants.UPDATE_FARM_FAIL);
    }
}

export {
    getFarmAction,
    createFarmAction,
    changeFarmNameAction
}