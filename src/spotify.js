const authEndPoint = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3000/";
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-top-read",
  "user-read-recently-played",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// access_token=BQBKVkHIo6BuF_D3XyT8BmDwWHYP_MopQXYTVviTp8GyiHewg4Tl5bG0ov8zuQZil5vm8txYZ0nx1k4fnOl_c8hFV03Gtz69F04DtFb1WbnzYxKBYMUijR6Wt-iX3TL1OLD5i2mk9Iw8mTtqtR1AsYzDGEdFw5U&token_type=Bearer&expires_in=3600
