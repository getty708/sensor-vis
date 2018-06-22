import { handleActions } from 'redux-actions'
import * as actions from '../actions/sequence'

import * as THREE from 'three';


console.log(actions);
const initState = {
    numSeq: 2,
    seqDisplay: 2,
    isFetching: false,
    isComplete: false,
    seqArray: [
        {
            tag: "200Hz",
            fs:200,
            position: new THREE.Vector3(-5,0,0),
        },
        {
            tag: "100Hz",
            fs:100,
            position: new THREE.Vector3(5,0,0),
        },
    ],
};


export default handleActions({
    [actions.userIncrement] : (state, action) => ({
        ...state,
        seqNum:  state.seqNum + 1,
    }),
    [actions.userDecrement] : (state, action) => ({
        ...state,
        seqNum:  state.seqNum - 1,
    }),
    [actions.SYS_FETCH_DATA]: (state, action) => ({
        ...state,
        isFetching: true,
        isComplete: false, 
    }),
    [actions.SYS_RECIEVE_SEQ_SUCCESS]: (state, action) => ({
        ...state,
        isFetching: false,
        isComplete: true,
        seqArray: state.seqArray.push(action.payload),
    }),
    [actions.SYS_RECIEVE_SEQ_FAILED]: (state, action) => ({
        ...state,
        isFetching: true,
        isComplete: false,
    }),
}, initState);

