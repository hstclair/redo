

export const borkAction = () => dispatch => {
    dispatch({
        type: 'BORK',
	payload: 'Bork!'
    })
};


export const loginResponseAction = (response) => dispatch => {

    dispatch({
        type: 'LoginResponseActionType',
        payload: response
    })
};

export const loginFailureAction = (reasonString) => dispatch => {

    dispatch({
        type: 'LoginFailureActionType',
        payload: reasonString
    })
};





