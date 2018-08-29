
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import borkReducer from './borkReducer';

export default combineReducers({
    application: simpleReducer,
    borkState: borkReducer
});


