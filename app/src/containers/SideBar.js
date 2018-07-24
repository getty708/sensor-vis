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
import {Device} from '../components/Three'


// Constants
const pi = Math.PI;
const rad = pi / 180;





class SideBar extends React.Component {
   
    render() {
        console.log(this.props);
        
        return (
            <div className="row py-3">
              <div className="col-12" >
                <h5>Settings</h5>
              </div>
              <div className="col-12" >
                <label for="basic-url"># of Sequence</label>
                <div className="btn-group btn-group-sm mx-2" role="group">
                  <button type="button" className="btn btn-sm btn-outline-primary"
                          id="increment" onClick={() => this.props.actions.userIncrement()} >+</button>
                  <button id="decrement" className="btn btn-sm  btn-outline-primary"
                          onClick={() => this.props.actions.userDecrement()}>-</button>           
                </div>
                </div>
              </div>
        );
    }
}


function mapStateToProps(state){
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
)(SideBar);
