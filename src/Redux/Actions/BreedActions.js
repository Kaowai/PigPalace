import * as BreedConstants from '../Constants/BreedConstants';
import * as pigAPI from '../APIs/BreedServiceService';
import { ErrorsAction, tokenProtection } from '../Protection';

const createBreedAction = (tenGiongHeo, moTa, farmID) => async (dispatch) => {
    try {
        dispatch({ type: BreedConstants.CREATE_BREED_REQUEST });

        // call api and recive response
        const response = await pigAPI.createBreedService(tenGiongHeo, moTa, farmID);

        // handle create breed successfully
        dispatch({ type: BreedConstants.CREATE_BREED_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, BreedConstants.CREATE_BREED_FAIL);
    }
}

const getBreedByFarmIDAction = (farmID) => async (dispatch) => { 
    try {
        dispatch({type: BreedConstants.GET_BREED_BY_FARM_ID_REQUEST});

        // call api and recive response
        const response = await pigAPI.getBreedByFarmIDService(farmID);
        dispatch({type: BreedConstants.GET_BREED_BY_FARM_ID_SUCCESS, payload: response});
    } catch (error) {
        ErrorsAction(error, dispatch, BreedConstants.GET_BREED_BY_FARM_ID_FAIL);
    }
}

const getBreedByIDAction = (id) => async (dispatch) => { 
    try {
        dispatch({type: BreedConstants.GET_BREED_BY_ID_REQUEST});

        // call api and recive response
        const response = await pigAPI.getBreedByIDService(id);

        dispatch({type: BreedConstants.GET_BREED_BY_ID_SUCCESS, payload: response});
    } catch (error) {
        ErrorsAction(error, dispatch, BreedConstants.GET_BREED_BY_ID_FAIL);
    }
}

const updateBreedAction = (id, tenGiongHeo, moTa, farmID) => async (dispatch) => { 
    try {
        dispatch({type: BreedConstants.UPDATE_BREED_REQUEST});

        // call api and recive response
        const response = await pigAPI.updateBreedService(id, tenGiongHeo, moTa, farmID);

        dispatch({type: BreedConstants.UPDATE_BREED_SUCCESS, payload: response});
    } catch (error) {
        ErrorsAction(error, dispatch, BreedConstants.UPDATE_BREED_FAIL);
    }
}

const deleteBreedAction = (id) => async (dispatch) => { 
    try {
        dispatch({type: BreedConstants.DELETE_BREED_REQUEST});

        // call api and recive response
        const response = await pigAPI.deleteBreedService(id);

        dispatch({type: BreedConstants.DELETE_BREED_SUCCESS, payload: response});
    } catch (error) {
        ErrorsAction(error, dispatch, BreedConstants.DELETE_BREED_FAIL);
    }
}

export {
    createBreedAction,
    getBreedByFarmIDAction,
    getBreedByIDAction,
    updateBreedAction,
    deleteBreedAction
}