import {combineReducers} from 'redux'
import sequenceReducer from './sequence'


const rootReducer = combineReducers({
    sequenceReducer,
})

export default rootReducer
