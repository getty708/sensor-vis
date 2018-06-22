import React from 'react'


const Device = ({rotation, position}) => {
    // console.log(position, rotation);
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
export default Device;
