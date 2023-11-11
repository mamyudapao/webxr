import {ARButton, XR, Controllers, Hands} from '@react-three/xr'
import {Canvas} from '@react-three/fiber'
import PenguinModel from './Components/UseModel/index';
import {Physics} from "@react-three/cannon";

function App() {
    return (
        <>
            <Physics>
            <ARButton></ARButton>
                <Canvas>
                    <XR>
                        <Controllers/>
                        <Hands/>
                        <ambientLight/>
                        <pointLight position={[0, 1.6, 0]}/>
                        <PenguinModel/>
                    </XR>
                </Canvas>
            </Physics>
        </>
    )
}

export default App;