const INITIAL_STATE = { delegates : [] };


export default (state = INITIAL_STATE, action) => {

    const { type } = action

    switch (type) {

        case "FETCH_DELEGATES_SUCCESS": {


            console.log(action.payload.data)
            return {...state, delegates: action.payload.data.list}
        }

        case "CLOSE_MENU": {
            return Object.assign({}, state, {
                open: false
            })
        }

        default: {
            return state
        }
    }
}