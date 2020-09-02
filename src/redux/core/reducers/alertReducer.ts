import types from '../actions/types/alertTypes';

const initialState = {};

interface IAction {
  type: string;
  message: string;
}

export default function alertReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case types.SUCCESS:
      return {
        type: 'success',
        message: action.message,
      };
    case types.ERROR:
      return {
        type: 'warning',
        message: action.message,
      };
    case types.CLEAR:
      return {};
    default:
      return state;
  }
}
