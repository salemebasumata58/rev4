import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { companyReducer, employeeReducer } from "./reducer";
import thunk from "redux-thunk"


const rootReducer =combineReducers ({
    companyData: companyReducer,
    employeeData: employeeReducer
})
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)