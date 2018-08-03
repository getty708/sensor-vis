import React from "react"
import ReactDOM from "react-dom"
import {bindActionCreators} from 'redux'
import {compose, connect} from "react-redux"
//import SizeMe from 'react-sizeme'


// Three.js
import React3 from 'react-three-renderer';
import * as THREE from 'three';

// My Module
import * as actions from "../actions/sequence"
import {ThreeMain, Device} from '../components/Three'
// import ControlPanel from '../components/ControlPanel'


// Constants
const pi = Math.PI;
const rad = pi / 180;





class VisContainer extends React.Component {
    constructor(props, context) {
        super(props, context)

        // Init Device config
        // const {seqArray} = this.props.seq;

    }

    componentWillMount(){
        console.log("componentWillMount")
        console.log(this.props.actions);
        console.log(actions);
        this.props.actions.sysRequestSeq("200Hz", "./data/arm04_pose_ORG200Hz_Q.csv");
        this.props.actions.sysRequestSeq("100Hz", "./data/arm04_pose2_LR100Hz_Q.csv");
        this.props.actions.sysRequestSeq("50Hz", "./data/arm04_pose2_LR50Hz_Q.csv");
        this.props.actions.sysRequestSeq("25Hz", "./data/arm04_pose2_LR25Hz_Q.csv");
        // this.props.actions.sysRequestSeq("50Hz", "./data/arm01_pose_ORG50Hz_[ORG200Hz].csv");
        // this.props.actions.sysRequestSeq("25Hz", "./data/arm01_pose_ORG25Hz_[ORG200Hz].csv");  
        // this.props.actions.sysRecieveSeqSuccess("200Hz", [0,0,0,]);
    }
    
    render() {
        // const {seqArray} = this.; 
        const {seqArray, seqList, control}  = this.props.seq;
        let seqEnd = 0;
        if (seqList["200Hz"]){
            seqEnd = seqList["200Hz"].data.length;
        }
        console.log(seqList);
        const {userSwitchPlayStop} = this.props.actions;
        
        return (
            <div className="row py-3">
              <div className="col-12" >
                <ThreeMain
                   seqArray={seqArray}
                   seqEnd={seqEnd}
                   seq200Hz={seqList["200Hz"]}
                   seq100Hz={seqList["100Hz"]}
                   seq50Hz={seqList["50Hz"]}
                   seq25Hz={seqList["25Hz"]}
                   control={control}
                   actions={this.props.actions}
                   />
                <div className="col-12" >              

                </div>                
              </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state);
    return {
        seq: state.sequenceReducer,
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions.default, dispatch),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisContainer);
