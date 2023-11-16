import React, { useEffect, useRef, useState } from 'react';
import CDBaseComponent from "../MusicAlbam";
import { Interactive } from "@react-three/xr";

type Props = {
    position: [number, number, number];
}

const MusicAlbumWithPlayButton = ({ position }: Props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/test.mp3"));

    const togglePlay = () => {
        // if (isPlaying) {
        //     audioRef.current.pause();
        // } else {
        //     audioRef.current.play();
        // }
        // setIsPlaying(!isPlaying);
        return
    };

    return (
        <>
            <ambientLight intensity={0.5} />
            <CDBaseComponent image={"/beatles.png"} artist="test" title="test" position={position} />
        </>
    );
};

export default MusicAlbumWithPlayButton;