import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text, RoundedBox } from '@react-three/drei';
import MusicAlbumWithPlayButton from '../../../Components/MusicAlbumWithPlayButton';
import { useRef, useState } from 'react';

const TabletBox = () => {
    return (
        <mesh>
            <boxGeometry args={[3, 9, 0.3]} /> {/* 幅、高さ、奥行きをタブレットの形状に合わせる */}
            <meshStandardMaterial color={'gray'} />
        </mesh>
    );
};

type Button3DProps = {
    text: string;
    position: [number, number, number];
    size: [number, number, number];
};


function Button3D({ text, position, size }: Button3DProps) {
    const [hovered, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <RoundedBox // RoundedBoxを使用
            args={size} // 幅、高さ、奥行き
            radius={0.2} // 角の丸みの半径
            smoothness={4} // 角の滑らかさ
            scale={clicked ? 1.5 : 1}
            onClick={() => setClicked(!clicked)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            position={position}>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            <Text
                position={[0, 0, 0.6]}
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="middle">
                {text}
            </Text>
        </RoundedBox>
    );
}


const Debug = () => {
    const [text, setText] = useState('Hello World')
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <h1>Debug</h1>
            <Canvas>
                <Button3D text='Play' position={[1.5, 1.5, 0]} size={[1, 0.5, 0.5]} />
                <Button3D text='Search' position={[2.0, 2.0, 0]} size={[1, 0.5, 0.5]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MusicAlbumWithPlayButton position={[0, 0, 0]} />
                <Text
                    fontSize={0.5}
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                    position={[-6, 3,0]}
                >
                    {text}
                </Text>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Debug;
