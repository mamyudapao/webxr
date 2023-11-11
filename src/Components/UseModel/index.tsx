import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import {Object3D} from "three";

const PenguinModel = () => {
    const modelRef = useRef<Object3D>();
    const {scene} = useGLTF("/penguin.gltf");

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    return (
        <primitive ref={modelRef} object={scene} scale={1}/>
    );
}

export default PenguinModel;