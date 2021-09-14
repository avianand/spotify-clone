export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // token:
  //   "BQDq093hyyZsw9AvuTm9A3kMxbg05mRMaUKYY0anSvP6Ly2DEI_gR1Cuy_b89lN_2kgts5hmUZKbDo6ZR_9Rco0PPLmoHLhrcfKpGaeWeXXVJvOQ41NUpnX-7iQr3fDNwnm_qoKcWb3b9u_XaFtKr46N7hpY0Fs",
};

const reducer = (state, action) => {
  console.log(action);

  //action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
