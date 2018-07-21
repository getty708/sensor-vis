import React from 'react'

// Three.js
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import Device from './Device'


class ThreeMain extends React.Component {
    constructor(props, context) {
        super(props, context)

        // Init Device config
        console.log(this.props);

        // Init State
        this.cameraPosition = new THREE.Vector3(0, 25,20);
        this.state = {
            cubeRotation: new THREE.Euler(),
            height: 400,
            width: 800,
            time: 0,
        };

        this._onAnimate = () => {
            const idx = this.state.time;
            let rot = new THREE.Euler(0,0,0,0,)
            if (this.props.seqList["200Hz"]){
                const seq200 = this.props.seqList["200Hz"].data[idx]
                // console.log(seq200);
                rot = new THREE.Euler(seq200.roll,seq200.pitch, seq200.yaw,0);
            }
            this.setState({
                cubeRotation: rot,
                time: idx == this.props.seqEnd ? 0 : idx + 1
            });
        };   
    }
    
    render() {
        const {width, height,} = this.state;
        const {seqArray} = this.props;
        // console.log(this.props);
        const seq_200Hz = seqArray[0];
        const seq_100Hz = seqArray[1];
        
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
                   key={seq_200Hz.tag}
                   rotation={this.state.cubeRotation}
                   position={seq_200Hz.position}
                   />
                <Device                                 
                   key={seq_100Hz.tag}
                   rotation={this.state.cubeRotation}
                   position={seq_100Hz.position}
                   />                 
              </scene>
            </React3>            
        );
    }
}
export default ThreeMain


