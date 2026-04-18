import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export function Porsche({ ...props }) {
  const group = useRef();
  const { scene } = useGLTF('/models/free_porsche_911_carrera_4s.glb');

  // DNA BMW: Precision in asset handling
  // Traverse the scene to enable shadows on all meshes
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        // High-end material tweak: Ensure environment reflections are active
        if (child.material) {
          child.material.envMapIntensity = 1.5;
        }
      }
    });
  }, [scene]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/free_porsche_911_carrera_4s.glb');
