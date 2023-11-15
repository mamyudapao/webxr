import { atom } from "recoil";

const spotifyAuthState = atom({
    key: "spotifyAuthState",
    default: {
        accessToken: "",
        expiresIn: 0,
        tokenType: "",
    },
});

export default spotifyAuthState;