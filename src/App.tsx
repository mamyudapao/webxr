import {ARButton, XR, Controllers, Hands, VRButton} from '@react-three/xr'
import {Canvas} from '@react-three/fiber'
import PenguinModel from './Components/UseModel/index';
import {Physics} from "@react-three/cannon";

function App() {
    return (
        <>
            <VRButton></VRButton>
            <Canvas>
                <Physics>
                    <XR>
                        <Controllers/>
                        <Hands/>
                        <ambientLight/>
                        <pointLight position={[0, 1.6, 0]}/>
                        <PenguinModel/>
                    </XR>
                </Physics>
            </Canvas>
        </>
    )
}

export default App;