import { fork } from "redux-saga/effects"
import {handleRequestSequence} from './sequence'


console.log(handleRequestSequence);
export default function* rootSaga(){
    yield fork(handleRequestSequence);
}
