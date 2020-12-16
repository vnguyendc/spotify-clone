export const authEndpoint =
"https://accounts.spotify.com/authorize";

// when deploying, change this to the public URL
const redirectUri = "https://peaceful-woodland-47913.herokuapp.com/";

const clientId = "49e0d5118da04bf2805d96f6769ab991";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

// Getting access token
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=vinh
      // ensures we get the accesstoken value
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;