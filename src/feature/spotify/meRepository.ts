import client from "./auth/client";

export type SpotifyUser = {
    display_name: string;
    email: string;
    external_urls: {
        spotify: string;
    };
    followers: {
        href: null;
        total: number;
    };
    href: string;
    id: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    type: string;
    uri: string;
};


export const getMe = async (accessToken: string): Promise<SpotifyUser> => {
    const {data} = await client.get<SpotifyUser>('/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return data;
};