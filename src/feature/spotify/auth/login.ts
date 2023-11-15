import client from './client';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
};

export const login = async () => {
    try {
        const {data} = await client.post<LoginResponse>('/api/token', {
            'grant_type': 'client_credentials',
            'client_id': process.env.REACT_APP_SPOTIFY_CLIENT_ID,
            'client_secret': process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
        });
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
        // TODO: retry logic
    }
}
