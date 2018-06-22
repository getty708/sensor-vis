import {createStore, applyMiddleware, combineReducers} from "redux"
import createSagaMiddleware from "redux-saga"
//import logger from "redux-logger"
import rootReducer from "../reducers"
import rootSaga from "../sagas"



export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        // combineReducers({
        //     rootReducer,
        // }),        
        initialState,
        applyMiddleware(
            sagaMiddleware,
        )
    )
    sagaMiddleware.run(rootSaga)
    return store
}
