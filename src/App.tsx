import {VRButton, XR, Controllers, Hands} from '@react-three/xr'
import {Canvas} from '@react-three/fiber'
import PenguinModel from './Components/UseModel/index';

function App() {
    return (
        <>
            <VRButton></VRButton>
            <Canvas>
                <XR>
                    <Controllers/>
                    <Hands/>
                    <ambientLight/>
                    <pointLight position={[0, 1.6, 0]}/>
                    <PenguinModel/>
                </XR>
            </Canvas>
        </>
    )
}

export default App;