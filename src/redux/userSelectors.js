export const selectLogedIn = state => state.auth.isLogedIn;
export const selectEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
