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





class Footer extends React.Component {
   
    render() {
        console.log(this.props);
        
        return (
            <div className="container-fluid bg-secondary">
              <div className="row">              
                <div className="col-12 text-white text-right" >
                  <p>Sensor Visualization Tool-Kit</p>
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
)(Footer);
