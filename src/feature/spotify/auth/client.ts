import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.spotify.com',
});

export default client;