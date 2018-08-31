import React from 'react'
import * as THREE from 'three';
// import Loader from 'react-loaders'


const MyComponentUI = ({ font }) => (
    <mesh>
      <textGeometry text="hi there" font={font.object} size={12} height={1} />
      <meshPhongMaterial color={0xffffff} />       
    </mesh>
);

var loader = new THREE.FontLoader();
console.log(loader);
const Text = loader.load("/font.json", THREE.FontLoader, 'font', MyComponentUI);

export default Text;
