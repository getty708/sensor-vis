import {createActions} from 'redux-actions'
import * as types from '../constants/sequence'



//
// Action Creater
//  
// export const increment = createAction('INCREMENT');
// export const decrement = createAction('DECREMENT');

//
// Get Sequecne Data
//
console.log(types)
export default createActions(
    {
        [types.SYS_REQUEST_SEQ]: (seqType,url) => ({url, seqType}),
        [types.SYS_RECIEVE_SEQ_SUCCESS]: (seqType, data) => ({seqType, data}),
        //     (...args) => args[0],
        //     (...args) => args[1],
        // ],
        [types.SYS_RECIEVE_SEQ_FAILED]:[
            (...args) => args[0],
            (...args) => args[1],
        ],
        // Meta
    },
    types.USER_DECREMENT,
    types.USER_INCREMENT,
    types.USER_SWITCH_PLAY_STOP,
)
