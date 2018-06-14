import React from "react"
import ReactDOM from "react-dom"
import {bindActionCreators} from 'redux'
import {connect} from "react-redux"

// Three.js
import React3 from 'react-three-renderer';
import * as THREE from 'three';


import * as actions from "../actions"

// Constants
const pi = Math.PI;
const rad = pi / 180;
const width = window.innerWidth;
const height = window.innerHeight;



class VisContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.cameraPosition = new THREE.Vector3(0, 25,20);
        this.state = {
            cubeRotation: new THREE.Euler(),
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
    
    
    // componentDidMount() {
    //     this.props.fetchPhotosWithTexture();
    // }




    render() {
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
                <mesh
                   rotation={this.state.cubeRotation}
                   >
                  <boxGeometry
                     width={4}
                     height={2}
                     depth={5}
                     />
                  <meshNormalMaterial
                     transparent={false}
                     visible={true}
                     />
                </mesh>
              </scene>
            </React3>            
        );
    }
}


function mapStateToProps(state){
    return {
        visconfig: state.visconfig,
    }
}


function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisContainer);
