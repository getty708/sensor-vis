import React from 'react'
import * as THREE from 'three';


const Axis = ({rotation1,rotation2,position}) => {
    // console.log(position, rotation);
    // console.log(rotation1.x, rotation1.y);
    const rotX = rotation2.x - rotation1.x;
    const rotY = rotation2.y - rotation1.y;
    const rotZ = rotation2.z - rotation1.z;
    const rot = new THREE.Euler(rotX,0,rotZ,);
    return(
	<axisHelper
	position={position}
        size={15}
        rotation={rot}
        />
    );
};
export default Axis;
