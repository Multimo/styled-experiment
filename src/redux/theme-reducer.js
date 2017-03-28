export default (state = {
     theme: {
        btnTheme: true,
     }
}, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
    console.log(state);
      return Object.assign({}, state, state.btnTheme = !state.btnTheme);
    default:
      return state;
  }
};