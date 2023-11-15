import React from 'react';
import { Button, Container, Title } from '@mantine/core';
import {login} from "../../feature/spotify/auth/login";

const SpotifyLogin = () => {


    return (
        <Container size={420} my={40}>
            <Title order={2}  mb="xl">
                Spotifyへログイン
            </Title>
            <Button onClick={login} fullWidth>
                ログイン
            </Button>
        </Container>
    );
};

export default SpotifyLogin;
