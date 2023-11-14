import React from 'react';
import {Box, useTexture} from "@react-three/drei";


type Props = {
    title: string;
    artist: string;
    image: string;
    position: [number, number, number];
}

const CDCase = ({title, artist, image, position}: Props) => {

    const texture = useTexture(image);

    return(
    <Box args={[0.5, 0.5, 0.01]} position={position}>
        <meshStandardMaterial attach="material" map={texture}/>
    </Box>
    )
};

const CDBaseComponent = ({title, artist, image, position}: Props) => {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
            <CDCase title={title} artist={artist} image={image} position={position}/>
        </>
    );
}

export default CDBaseComponent;