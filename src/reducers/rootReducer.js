import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import appointmentReducer from "./appointment";


const rootReducer = combineReducers({
    form: formReducer,
    appointmentReducer
});

export default rootReducer; 