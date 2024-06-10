import * as RoleConstants from '../Constants/RoleConstants';
import * as roleAPI from '../APIs/RoleService';
import { ErrorsAction, tokenProtection } from '../Protection';

const createRoleAction = (farmID, roleName, basicSalary, description) => async (dispatch) => {
    try {
        dispatch({ type: RoleConstants.CREATE_ROLE_REQUEST });

        // call api and recive response
        const response = await roleAPI.createRoleService(farmID, roleName, basicSalary, description);

        // handle create role successfully
        dispatch({ type: RoleConstants.CREATE_ROLE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, RoleConstants.CREATE_ROLE_FAIL);
    }
}
const getRoleAction = (farmID) => async (dispatch) => {
    try {
        dispatch({ type: RoleConstants.GET_ROLE_REQUEST });

        // call api and recive response
        const response = await roleAPI.getRoleService(farmID);

        // handle get role successfully
        dispatch({ type: RoleConstants.GET_ROLE_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, RoleConstants.GET_ROLE_FAIL);
    }
}

export {
    createRoleAction,
    getRoleAction
}