import types from './types/sessionTypes';

interface SignInParams {
  email: string;
  password: string;
}

export const loginRequestSaga = (credentials: SignInParams) => ({
  type: types.LOGIN_REQUEST_SAGA,
  credentials,
});

export const setLoggingIn = (isLogging: boolean) => ({
  type: types.SET_LOGGING_IN,
  isLogging,
});

export const setLogout = () => ({
  type: types.LOGOUT,
});
