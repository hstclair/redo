
export default (state = {}, action) => {

  var result = Object.assign({}, state);

  switch (action.type) {
    case 'SIMPLE_ACTION':

      result.result = action.payload;
      break;

    case 'BORK':

      result.bork = 'maximum borkage: ' + action.payload;
      break;

    default:
      result = state
      break;
  }

  return result;
}

