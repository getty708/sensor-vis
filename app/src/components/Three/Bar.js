import React from 'react';
import * as THREE from 'three';

const Bar = ({depth, posX, posZ, width}) => {
    let  dep = Math.abs(depth)*(180/3.14);
    const rot = new THREE.Euler(0,0,0,);
    const pos = new THREE.Vector3(posX, dep/2, posZ);
    const color = "#ffffff";
    console.log("Depth", dep);
    return(
        <mesh
           rotation={rot}
           position={pos}
           >
          <boxGeometry
             width={width}
             height={dep}
             depth={2}
             />
          <meshNormalMaterial
             transparent={false}
             visible={true}
             />
        </mesh>   
    );
};
export default Bar;
