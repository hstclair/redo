
export default (state = { borkCount: 0 }, action) => {

  switch (action.type) {

    case 'BORK':

      return Object.assign({}, state, { borkCount: state.borkCount + 1 });

    case 'LoginResponseAction':

      return Object.assign({}, state, { loginResponse: action.payload });

    case 'LoginFailureAction':

      return Object.assign({}, state, { loginError: action.payload });

    default:

      return state;
  }
}


