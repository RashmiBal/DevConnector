import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducers';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
});

// root reducer, all reducers will get combined into here