import types from '../actions/types/sessionTypes';
import { authHeader } from '../../../helpers/authHeader';

interface IAction {
  type: string;
  isLogging: boolean;
  email: string | null;
}

const { email } = authHeader();

const initialState = { email: email ? email : null, loggingIn: false };

export default function sessionReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case types.SET_LOGGING_IN:
      return { ...state, loggingIn: action.isLogging };
    case types.LOGIN_SUCCESS:
      return { ...state, email: action.email };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}
