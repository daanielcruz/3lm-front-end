import { combineReducers } from 'redux';

import sessionReducer from './reducers/sessionReducer';
import alertReducer from './reducers/alertReducer';

export default combineReducers({
  session: sessionReducer,
  alert: alertReducer,
});
