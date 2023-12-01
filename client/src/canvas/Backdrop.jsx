import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame, useThree } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import * as THREE from 'three'; // Import Three.js

const Backdrop = () => {
  const { scene } = useThree();

  scene.background = new THREE.Color('white');

  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      opacity={0.75}
    >
      <RandomizedLight
        amount={4} 
        radius={9}
        intensity={0.75}
        ambient={0.85}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={4} 
        radius={5}
        intensity={0.25}
        ambient={0.15}
        position={[-5, 5, -9]}
      />      
    </AccumulativeShadows>
  )
}

export default Backdrop
