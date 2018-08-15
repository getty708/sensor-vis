import React from 'react'

// Three.js
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import Device from './Device'
import ControlPanel from './ControlPanel'


class ThreeMain extends React.Component {
    constructor(props, context) {
        super(props, context)

        // Init Device config
        console.log(this.props);

        // Init State
        this.cameraPosition = new THREE.Vector3(0, 25,20);
        this.state = {
            cubeRotation1: new THREE.Euler(),
            cubeRotation2: new THREE.Euler(),
            cubeRotation3: new THREE.Euler(),
            cubeRotation4: new THREE.Euler(),
            height: 400,
            width: 800,
            time: 0,
        };

        this._onAnimate = () => {
            // console.log(this.props.control);
            if (this.props.control.play){
                const idx = this.state.time;
                let rot1 = new THREE.Euler(0,0,0,0,);
                let rot2 = new THREE.Euler(0,0,0,0,);
                let rot3 = new THREE.Euler(0,0,0,0,);
                let rot4 = new THREE.Euler(0,0,0,0,);
                // if (this.props.seq1){
                //     const seq200 = this.props.seq1.data[idx];
                //     rot1 = new THREE.Euler(seq200.roll,seq200.pitch, seq200.yaw,0);
                // }
                // if (this.props.seq2){
                //     const seq100 = this.props.seq2.data[idx];
                //     rot2 = new THREE.Euler(seq100.roll,seq100.pitch, seq100.yaw,0);
                // }
                // if (this.props.seq3){
                //     const seq50 = this.props.seq3.data[idx];
                //     rot3 = new THREE.Euler(seq50.roll,seq50.pitch, seq50.yaw,0);
                // }
                if (this.props.seq1){
                    const seq1 = this.props.seq1.data[idx];
                    rot1 = new THREE.Euler(seq1.roll,0,seq1.pitch,);
                }
                if (this.props.seq2){
                    const seq2 = this.props.seq2.data[idx];
                    rot2 = new THREE.Euler(seq2.roll,0,seq2.pitch);
                }
                if (this.props.seq3){
                    const seq3 = this.props.seq3.data[idx];
                    rot3 = new THREE.Euler(seq3.roll,0,seq3.pitch,);
                }
                if (this.props.seq4){
                    const seq4 = this.props.seq4.data[idx];
                    rot4 = new THREE.Euler(seq4.roll,0,seq4.pitch,);
                }                                
                this.setState({
                    cubeRotation1: rot1,
                    cubeRotation2: rot2,
                    cubeRotation3:  rot3,
                    cubeRotation4:  rot4,                    
                    time: idx == this.props.seqEnd ? 0 : idx + 1
                });
            };
        }
    }
    
    render() {
        // console.log(this.props);
        const {width, height,} = this.state;
        const {seqArray} = this.props;
        const seq1 = seqArray[0];
        const seq2 = seqArray[1];
        const seq3  = seqArray[2];
        const seq4  = seqArray[3];
        const {userSwitchPlayStop} = this.props.actions;      
        
        return (
            <div className="card">
              <div className="card-header">
                3D View | 200 Hz, 100 HZ, 50Hz
              </div>
              <div className="card-body">
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
                       key={seq1.tag}
                       rotation={this.state.cubeRotation1}
                       position={seq1.position}
                       />
                    <Device                                 
                       key={seq2.tag}
                       rotation={this.state.cubeRotation2}
                       position={seq2.position}
                       />
                    <Device                                 
                       key={seq3.tag}
                       rotation={this.state.cubeRotation3}
                       position={seq3.position}
                       />
                    <Device                                 
                       key={seq4.tag}
                       rotation={this.state.cubeRotation4}
                       position={seq4.position}
                       />                                                
                  </scene>
                </React3>                                            
              </div>
              <div className="card-footer text-muted">
                <ControlPanel
                   switchPlayStop={userSwitchPlayStop}
                   />                
              </div>
            </div>            
        );
    }
}
export default ThreeMain


