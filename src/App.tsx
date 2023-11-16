import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from 'recoil';
import Home from "./pages/Home";
import Callback from './feature/spotify/auth/Authorize/Callback';
import Debug from './pages/XR/Debug';


function App() {

    return (
        <>
            <RecoilRoot>
                <MantineProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/callback" element={<Callback />} />
                            <Route path="/xr/debug" element={<Debug />} />
                        </Routes>
                    </Router>
                </MantineProvider>
            </RecoilRoot>
        </>
    )
}

export default App;