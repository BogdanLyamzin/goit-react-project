import actions from './auth-actions';
import AuthService from "./auth-service";

const authService = new AuthService()

export const register = body => async dispatch => {
  dispatch(actions.registerRequest());
  try {
    const data = await authService.register(body)
    authService.saveToken(data.token)
    dispatch(actions.registerSuccess(data))
  }
  catch (error) {
    dispatch(actions.registerError(error.message))
  }
}

export const logIn = body => async dispatch => {
    dispatch(actions.loginRequest())
    try {
      const data = await authService.logIn(body);
      authService.saveToken(data.token)
      dispatch(actions.loginSuccess(data))
    } catch (error) {
        dispatch(actions.loginError(error.message))
    }
};

