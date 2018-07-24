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





class Header extends React.Component {
    
    render() {
        return (
            <nav className="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Sensor toolkit</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>
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
)(Header);
