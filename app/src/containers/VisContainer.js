import React from "react"
import ReactDOM from "react-dom"
import {bindActionCreators} from 'redux'
import {compose, connect} from "react-redux"
//import SizeMe from 'react-sizeme'


// Three.js
import React3 from 'react-three-renderer';
import * as THREE from 'three';


import * as actions from "../actions"

// Constants
const pi = Math.PI;
const rad = pi / 180;


const Device = ({rotation, position}) => {
    return(
        <mesh
           rotation={rotation}
           position={position}
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
    );
};


class VisContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.cameraPosition = new THREE.Vector3(0, 25,20);
        this.state = {
            cubeRotation: new THREE.Euler(),
            height: 400,
            width: 800,
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
        const {width, height} = this.state;

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
                <Device
                   uniqeName="Device1"
                   rotation={this.state.cubeRotation}
                   position={new THREE.Vector3(-10,0,0)}
                   />
                <Device
                   uniqeName="Device2"
                   rotation={this.state.cubeRotation}
                   position={new THREE.Vector3(0,0,0)}
                   />
                <Device
                   uniqeName="Device3"
                   rotation={this.state.cubeRotation}
                   position={new THREE.Vector3(10,0,0)}
                   />
                <Device
                   uniqeName="Device4"
                   rotation={this.state.cubeRotation}
                   position={new THREE.Vector3(20,0,0)}
                   />                 
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
// export default sizeMe({ monitorHeight: true })(connectedContainer);
// export default compose(
//     SizeMe(),
//     connect(
//         mapStateToProps,
//         mapDispatchToProps,
//     )
// )(VisContainer);
