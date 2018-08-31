import { handleActions } from 'redux-actions'
import * as actions from '../actions/sequence'
import * as types from '../constants/sequence'

import * as THREE from 'three';


console.log(actions);
const initState = {
    numSeq: 2,
    seqDisplay: 2,
    isFetching: false,
    isComplete: false,
    process: 0,
    seqArray: [
        {
            tag: "200Hz",
            fs:200,
            position: new THREE.Vector3(-10,0,0),
        },
        {
            tag: "100Hz",
            fs:100,
            position: new THREE.Vector3(0,0,0),
        },
        {
            tag: "50Hz",
            fs:50,
            position: new THREE.Vector3(10,0,0),
        },
    ],
    seqList: {},
    control: {
        play: true,
        start: 0,
        end: 60000,
    }
};

export default (state=initState, action) => {
    console.log("Reducer:SYS_FETCH_DATA", action);
    switch (action.type) {
    case types.USER_INCREMENT:
        return {
            ...state,
            numSeq: state.numSeq + 1,
        }
    case types.USER_DECREMENT:
        return {
            ...state,
            numSeq: state.numSeq - 1,
        }
    case types.SYS_REQUEST_SEQ:
        console.log("Reducer:SYS_REQUEST_SEQ", action);
        return {
            ...state,
            isFetching: true,
            isComplete: false,
        }
    case types.SYS_RECIEVE_SEQ_SUCCESS:
        console.log("Reducer:SYS_RECIEVE_SEQ_SUCCESS", action);
        const newSeqList = {
            ...state.seqList,
            [action.payload.seqType]: {
                fs: action.payload.seqType,
                data: action.payload.data,
                len: action.payload.data.length,
            }
        }
        return {
            ...state,
            isFetching: false,
            isComplete: true,
            seqList: newSeqList,
        }
    case types.SYS_RECIEVE_SEQ_FAILED:
        console.log("Reducer:SYS_RECIEVE_SEQ_FAILED", action);
        return {
            ...state,
            isFetching: false,
            isComplete: false,
        }
    case types.USER_SWITCH_PLAY_STOP:
        console.log("Reducer:USER_SWITCH_PLAY_STOP", action);
        const newControl = {
            ...state.control,
            play: !state.control.play,
        }
        console.log(newControl);
        return {
            ...state,
            control: newControl,
        }        
    default:
        return state
  }
}

