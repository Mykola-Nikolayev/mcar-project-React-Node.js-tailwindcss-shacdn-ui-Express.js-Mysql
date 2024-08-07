// src/ThreeScene.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import myModel from './src/assets/myModel.glb';
import 'BrandCard3D';

function Model() {
    const { scene } = useGLTF(myModel);
    return <primitive object={scene} />;
}

export default function ThreeScene() {
    return (
        <Canvas style={{ width: '100%', height: '100vh' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 0]} intensity={1.5} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
