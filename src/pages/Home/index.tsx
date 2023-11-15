import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authorize } from "../../feature/spotify/auth/Authorize/authorize";
import spotifyAuthState from "../../recoil/atoms/spotify/authorize";
import { SpotifyUser, getMe } from "../../feature/spotify/meRepository";
import { Card, Image } from "@mantine/core";

const Home = () => {

    const [spotifyAuth, setSpotifyAuthState] = useRecoilState(spotifyAuthState);
    const [me, setMe] = useState<SpotifyUser>();

    useEffect(() => {
        console.log(spotifyAuth);
        if (!spotifyAuth.accessToken) {
            authorize();
        }
    }, []);

    useEffect(() => {
        (async () => {
            if (spotifyAuth.accessToken) {
                const me = await getMe(spotifyAuth.accessToken);
                setMe(me);
                console.log(me);
            }
        })();
    }, [spotifyAuth]);

    return (
        <div>
            <h1>Home</h1>
            {
                me && (

                    <Card>
                        <Card.Section>
                            <Image src={me.images[1].url} width={me.images[1].width} height={me.images[1].height}></Image>
                        </Card.Section>
                    </Card>
                )
            }
        </div>
    )
}

export default Home;