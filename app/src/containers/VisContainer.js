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





class VisContainer extends React.Component {
    constructor(props, context) {
        super(props, context)

        // Init Device config
        const {seqArray} = this.props.seq;

        // Init State
        this.cameraPosition = new THREE.Vector3(0, 25,20);
        this.state = {
            cubeRotation: new THREE.Euler(),
            height: 400,
            width: 800,
            seqArray: seqArray,
        };

        this._onAnimate = () => {
            this.setState({
                cubeRotation: new THREE.Euler(
                    this.state.cubeRotation.x + 0.004,
                    this.state.cubeRotation.y + 0.002,
                    0
                ),
            });
        };        
    }

    
    
    render() {
        const {width, height, seqArray} = this.state;
        

        return (
            <React3
               mainCamera="camera"
               width={width}
               height={height}
               onAnimate={this._onAnimate}
               >
              <scene>
                <perspectiveCamera
                   name="camera"
                   fov={60}
                   aspect={width / height}
                   near={1}
                   far={1000}
                   lookAt={new THREE.Vector3(0, 0, 0)}
                   position={this.cameraPosition}
                   />
                <gridHelper size={20} step={10} />
                { seqArray.map(seq => {
                    return <Device                                 
                                  key={seq.tag}
                                  rotation={this.state.cubeRotation}
                                  position={seq.position}
                                  />
                    })                    
                }
              </scene>
            </React3>            
        );
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
        actions: bindActionCreators(actions, dispatch),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisContainer);
