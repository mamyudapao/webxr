import {ARButton, XR, Controllers, Hands, VRButton, useController, RayGrab} from '@react-three/xr'

import {Canvas} from '@react-three/fiber'
import {Physics} from "@react-three/cannon";
import MusicAlbumWithPlayButton from "./Components/MusicAlbumWithPlayButton";
import {useRef, useState} from "react";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/test.mp3"));

    const albums = [
        {
            title: "test",
            artist: "test",
            image: "/beatles.png",
        },
        {
            title: "test",
            artist: "test",
            image: "/beatles.png",

        },
        {
            title: "test",
            artist: "test",
            image: "/beatles.png",
        },
    ]

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <ARButton></ARButton>
            <Canvas>
                <Physics>
                    <XR>
                        <Controllers/>
                        <Hands/>
                        <ambientLight/>
                        <pointLight position={[0, 1.6, 0]}/>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[0, 0, 0]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[1, 1, 1]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[2, 2, 2]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[3, 3, 3]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[4, 4, 4]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[5, 5, 5]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[6, 6, 6]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[7, 7, 7]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[8, 8, 8]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[9, 9, 9]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[10, 10, 10]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[11, 11, 11]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[12, 12, 12]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[13, 13, 13]}/>
                        </RayGrab>
                        <RayGrab>
                            <MusicAlbumWithPlayButton position={[14, 14, 14]}/>
                        </RayGrab>

                    </XR>
                </Physics>
            </Canvas>
            <button onClick={togglePlay}>Music Play</button>
        </>
    )
}

export default App;