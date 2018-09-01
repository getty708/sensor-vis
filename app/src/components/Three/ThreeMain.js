import React from 'react'

// Three.js
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import Device from './Device'
import Axis from './Axis'
import Bar from './Bar'
// import Text from './Text'
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
            height: 600,
            width: 900,
            time: 0,
        };

        this._onAnimate = () => {
            // console.log(this.props.control);
            if (this.props.control.play){
                const idx = this.state.time;
                let rot1 = new THREE.Euler(0,0,0,0,);
                let rot2 = new THREE.Euler(0,0,0,0,);
                let rot3 = new THREE.Euler(0,0,0,0,);
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
                this.setState({
                    cubeRotation1: rot1,
                    cubeRotation2: rot2,
                    cubeRotation3:  rot3,
                    time: idx == this.props.seqEnd ? 0 : idx + 1
                });
            };
        };
    }
    
    render() {
        // console.log(this.props);
        const {width, height,} = this.state;
        const {seqArray} = this.props;
        const seq1 = seqArray[0];
        const seq2 = seqArray[1];
        const seq3  = seqArray[2];
        const {userSwitchPlayStop} = this.props.actions;      
        const labelHR = {
	    position: 'absolute',
	    top: '570px',
            left: '120px',
	    textAlign: 'center',
	    zIndex: 100,
	    display: 'inline-block',
            color: '#ffffff',
            fontSize: '2em',
        };
        const labelSR = {
            ...labelHR,
            'left': '410px',            
        };
        const labelLR = {
            ...labelHR,
            'left': '730px',            
        };
        const errTitle = {
            ...labelHR,
	    top: '360px',            
            left: '460px',            
        };
        const errRoll = {
            ...labelHR,
	    top: '300px',            
            left: '330px',
            fontSize: '2em',
            color: '#BDBDBD',            
        };        
        const errPitch = {
            ...labelHR,
	    top: '220px',            
            left: '330px',
            fontSize: '2em',
            color: '#BDBDBD',
        };
        const errLR = {
            ...labelHR,
	    top: '340px',            
            left: '650px',
            fontSize: '1.0em',
            color: '#BDBDBD',                        
        };      
        const errSR = {
            ...labelHR,
	    top: '340px',            
            left: '400px',
            fontSize: '1.0em',
            color: '#BDBDBD',                        
        };
        const errAxis = {
            ...labelHR,
	    top: '180px',            
            left: '520px',
            fontSize: '1.0em',
            color: '#9e9e9e',
        };
        const yaw = {
            ...labelHR,
	    top: '130px',            
            left: '40px',
            fontSize: '1.0em',
            color: '#9e9e9e',
        };             
        const title = {
            ...labelHR,
	    top: '80px',            
            left: '40px',
            fontSize: '2.5em',
            color: '#ffffff',
        };

        const errRollSR = (this.state.cubeRotation2.x  - this.state.cubeRotation1.x);
        const errRollLR = this.state.cubeRotation3.x  - this.state.cubeRotation1.x;
        const errPitchSR = this.state.cubeRotation2.z - this.state.cubeRotation1.z;
        const errPitchLR = this.state.cubeRotation3.z - this.state.cubeRotation1.z;        
        
        return (
            <div className="card">
              <div className="card-header">
                3D View | 100 Hz, Proposed, 50Hz
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
                    <gridHelper size={40} step={10} />
                    <Device                                 
                       key={seq1.tag}
                       rotation={this.state.cubeRotation1}
                       position={new THREE.Vector3(-15, 0, 8)}
                       />
                    <Device                                 
                       key={seq2.tag}
                       rotation={this.state.cubeRotation2}
                      position={new THREE.Vector3(0, 0, 8)}
                    />
                    <Device                                 
                       key={seq3.tag}
                       rotation={this.state.cubeRotation3}
                       position={new THREE.Vector3(15, 0, 8)}
                    />
                    <Bar
                      key={"RollLR"}                      
                      depth={errRollLR}
                      posX={15}
                      posZ={-4}
                      width={4}
                    />
                    <Bar
                      key={"RollSR"}                      
                      depth={errRollSR}
                      posX={0}
                      posZ={-4}
                      width={4}
                    />
                    <Bar
                      key={"PitchLR"}                      
                      depth={errPitchLR}
                      posX={15}
                      posZ={-12}
                      width={4}
                    />
                    <Bar
                      key={"PitchSR"}                      
                      depth={errPitchSR}
                      posX={0}
                      posZ={-12}
                      width={4}
                    />
                    <mesh
                      rotation={new THREE.Euler(0,0,0,)}
                      position={new THREE.Vector3(8, 2.5, -12)}
                    >
                      <boxGeometry
                        width={0.5}
                        height={5}
                        depth={0.5}
                      />
                      <meshBasicMaterial
                        color={new THREE.Color( 0x9e9e9e )}
                        transparent={false}
                        visible={true}
                      />
                    </mesh>                      
                  </scene>
                </React3>
		<div >
                  <div style={labelHR} >100 Hz</div>
                  <div style={labelSR} >Proposed</div>
                  <div style={labelLR} >Linear</div>
                  <div style={errTitle} >Absolute Errors <small>[deg]</small></div>
                  <div style={errRoll} >Roll</div>
                  <div style={errPitch} >Pitch</div>                  
                  <div style={errAxis} >5 [deg]</div>
		  <div style={yaw} >(note) "Yaw" angle is fixed in this video.</div>
                  <div style={title} >Pose Estimation Results</div>
                  <div style={errSR} >100Hz - Proposed</div>                 
                  <div style={errLR} >100Hz - Linear</div>                 
		</div>
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

// <div style={errLR} >Linear</div>
// <div style={errSR} >Proposed</div>


