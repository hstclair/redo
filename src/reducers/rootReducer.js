
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import borkReducer from './borkReducer';

export default combineReducers({
    simpleReducer,
    borkReducer
});


