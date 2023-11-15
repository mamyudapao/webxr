const scopes = [
    'user-read-private',
    'user-read-email',
    'user-top-read',
    'user-read-playback-state',
]

export const authorize = () => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`
    window.location.href = url
}