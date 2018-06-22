import {fork,call,put,takeLatest} from 'redux-saga/effects'

// Actions
import * as types from '../constants/sequence'
import ACT from '../actions/sequence'
import API from '../api/sequence'

//
// For Fetch Sequence Data
//
function* runRequestSequence(action){
    console.log("runRequestSeq@saga");    
    try{
        const {data, error} = yield call(API.fetchSequence(action.url));
        yield put(ACT.sysRecieveSeqSuccess(data));
    }catch(error){
        yield put(ACT.sysRecieveSeqFailed);
    }
}


function* handleRequestSequence(){
    yield takeLatest(types.SYS_REQUEST_SEQ, runRequestSequence);
}

export {
    handleRequestSequence,
}
