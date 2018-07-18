import {fork,call,put,takeLatest} from 'redux-saga/effects'

// Actions
import * as types from '../constants/sequence'
import ACT from '../actions/sequence'
import * as API from '../api/sequence'

import axios from 'axios'

//
// For Fetch Sequence Data
//
function* runRequestSequence(action){
    console.log(action);
    console.log(API.fetchSequence);
    console.log("runRequestSeq@saga");    
    try{
        const data = yield call(API.fetchSequence, action.payload.url);
        // console.log("data:", data);
        yield put(ACT.sysRecieveSeqSuccess(data));
    }catch(error){
        console.error("error:",error);
        yield put(ACT.sysRecieveSeqFailed(error));
    }
}


function* handleRequestSequence(){
    yield takeLatest(types.SYS_REQUEST_SEQ, runRequestSequence);
}

export {
    handleRequestSequence,
}
