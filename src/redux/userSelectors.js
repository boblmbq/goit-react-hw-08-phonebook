export const selectLogedIn = state => state.auth.isLogedIn;
export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
