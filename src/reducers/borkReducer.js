
export default (state = {}, action) => {

  var result = Object.assign({}, state);

  switch (action.type) {

    case 'BORK':

      if (result.borkCount == null)
	 result.borkCount = 0;

      result.borkCount++;
      break;

    default:
      result = state
      break;
  }

  return result;
}


