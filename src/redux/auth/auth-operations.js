
import actions from './auth-actions';
import AuthService from "./auth-service";

const authService = new AuthService()

export const register = body => async dispatch => {
  dispatch(actions.registerRequest());
  try {
    const { data } = await authService.register(body)
    dispatch(actions.registerSuccess(data))
  }
  catch (error) {
    dispatch(actions.registerError())
  }
}

export const logIn = body => async dispatch => {
    dispatch(actions.loginRequest())
    try {
        const { data } = await authService.logIn(body);
        dispatch(actions.loginSuccess(data))
    } catch (error) {
        dispatch(actions.loginError(error))
    }
};
