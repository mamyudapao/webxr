import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from 'recoil';
import Home from "./pages/Home";
import { authorize } from './feature/spotify/auth/Authorize/authorize';
import Callback from './feature/spotify/auth/Authorize/Callback';


function App() {

    return (
        <RecoilRoot>
            <MantineProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/callback" element={<Callback />} />
                    </Routes>
                </Router>
            </MantineProvider>
        </RecoilRoot>
    )
}

export default App;