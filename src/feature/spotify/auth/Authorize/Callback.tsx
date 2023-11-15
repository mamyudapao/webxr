import { useEffect } from "react";
import { useRecoilState } from "recoil";
import SpotifyAuthState from "../../../../recoil/atoms/spotify/authorize";
import {  useNavigate } from 'react-router-dom';

const Callback = () => {

    const [, setSpotifyAuthState] = useRecoilState(SpotifyAuthState);
    const navigate = useNavigate();
    const hash = window.location.hash.substring(1);

    // ハッシュ部分を解析してパラメータを取得
    const params = new URLSearchParams(hash);

    // access_token、token_type、expires_inなどを取得
    const accessToken = params.get('access_token');
    const tokenType = params.get('token_type');
    const expiresIn = params.get('expires_in');

    useEffect(() => {
        if (accessToken && tokenType && expiresIn) {
            setSpotifyAuthState({
                accessToken: accessToken,
                tokenType: tokenType,
                expiresIn: Number(expiresIn),
            });
            navigate('/');
        }
    }, []);

    return (
        <div>
            <h1>Callback</h1>
        </div>
    )
}

export default Callback;