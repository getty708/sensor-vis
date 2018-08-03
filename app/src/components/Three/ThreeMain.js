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
            cubeRotation200Hz: new THREE.Euler(),
            cubeRotation100Hz: new THREE.Euler(),
            cubeRotation50Hz: new THREE.Euler(),
            cubeRotation25Hz: new THREE.Euler(),
            height: 400,
            width: 800,
            time: 0,
        };

        this._onAnimate = () => {
            // console.log(this.props.control);
            if (this.props.control.play){
                const idx = this.state.time;
                let rot200Hz = new THREE.Euler(0,0,0,0,);
                let rot100Hz = new THREE.Euler(0,0,0,0,);
                let rot50Hz = new THREE.Euler(0,0,0,0,);
                let rot25Hz = new THREE.Euler(0,0,0,0,);
                // if (this.props.seq200Hz){
                //     const seq200 = this.props.seq200Hz.data[idx];
                //     rot200Hz = new THREE.Euler(seq200.roll,seq200.pitch, seq200.yaw,0);
                // }
                // if (this.props.seq100Hz){
                //     const seq100 = this.props.seq100Hz.data[idx];
                //     rot100Hz = new THREE.Euler(seq100.roll,seq100.pitch, seq100.yaw,0);
                // }
                // if (this.props.seq50Hz){
                //     const seq50 = this.props.seq50Hz.data[idx];
                //     rot50Hz = new THREE.Euler(seq50.roll,seq50.pitch, seq50.yaw,0);
                // }
                if (this.props.seq200Hz){
                    const seq200 = this.props.seq200Hz.data[idx];
                    rot200Hz = new THREE.Euler(seq200.roll,0,seq200.pitch,);
                }
                if (this.props.seq100Hz){
                    const seq100 = this.props.seq100Hz.data[idx];
                    rot100Hz = new THREE.Euler(seq100.roll,0,seq100.pitch);
                }
                if (this.props.seq50Hz){
                    const seq50 = this.props.seq50Hz.data[idx];
                    rot50Hz = new THREE.Euler(seq50.roll,0,seq50.pitch,);
                }
                if (this.props.seq25Hz){
                    const seq25 = this.props.seq25Hz.data[idx];
                    rot25Hz = new THREE.Euler(seq25.roll,0,seq25.pitch,);
                }                                
                this.setState({
                    cubeRotation200Hz: rot200Hz,
                    cubeRotation100Hz: rot100Hz,
                    cubeRotation50Hz:  rot50Hz,
                    cubeRotation25Hz:  rot25Hz,                    
                    time: idx == this.props.seqEnd ? 0 : idx + 1
                });
            };
        }
    }
    
    render() {
        // console.log(this.props);
        const {width, height,} = this.state;
        const {seqArray} = this.props;
        const seq_200Hz = seqArray[0];
        const seq_100Hz = seqArray[1];
        const seq_50Hz  = seqArray[2];
        const seq_25Hz  = seqArray[3];
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
                       key={seq_200Hz.tag}
                       rotation={this.state.cubeRotation200Hz}
                       position={seq_200Hz.position}
                       />
                    <Device                                 
                       key={seq_100Hz.tag}
                       rotation={this.state.cubeRotation100Hz}
                       position={seq_100Hz.position}
                       />
                    <Device                                 
                       key={seq_50Hz.tag}
                       rotation={this.state.cubeRotation50Hz}
                       position={seq_50Hz.position}
                       />
                    <Device                                 
                       key={seq_25Hz.tag}
                       rotation={this.state.cubeRotation25Hz}
                       position={seq_25Hz.position}
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


