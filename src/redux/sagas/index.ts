import { call, all, put, takeLatest } from 'redux-saga/effects';

import { signIn } from '../../services/sessionServices';

import sessionTypes from '../core/actions/types/sessionTypes';
import alertTypes from '../core/actions/types/alertTypes';

interface SignInParams {
  email: string;
  password: string;
}

interface RequestLoginAction {
  type: typeof sessionTypes.LOGIN_REQUEST_SAGA;
  credentials: SignInParams;
}

function* requestLogin(action: RequestLoginAction) {
  try {
    const response = yield call(() => signIn(action.credentials));

    yield put({
      type: sessionTypes.LOGIN_SUCCESS,
      email: response.email,
    });
  } catch (_) {
    yield put({
      type: alertTypes.ERROR,
      message: 'Ocorreu um erro ao fazer login, cheque as credenciais!',
    });
  }

  yield put({
    type: sessionTypes.SET_LOGGING_IN,
    isLogging: false,
  });
}

export default function* rootSaga() {
  return yield all([
    yield takeLatest(sessionTypes.LOGIN_REQUEST_SAGA, requestLogin),
  ]);
}
