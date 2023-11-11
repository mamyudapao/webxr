import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { Object3D } from "three";

const PenguinModel = () => {
    const modelRef = useRef<Object3D>();
    const { scene } = useGLTF("/penguin.gltf");

    // 当たり判定を設定
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [0, 0, 0],
        args: [1, 1, 1] // 当たり判定の大きさを調整
    }));

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
            // 物理オブジェクトの位置と同期
            api.position.copy(modelRef.current.position);
        }
    });

    return (
        <primitive ref={modelRef} object={scene} scale={1} />
    );
}

export default PenguinModel;
