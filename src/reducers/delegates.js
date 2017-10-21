const INITIAL_STATE = { delegates: [], delegate: {} };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_DELEGATES_SUCCESS': {
      return { ...state, delegates: payload.data.list };
    }

    case 'FETCH_PROFILE_SUCCESS': {

      return { ...state, delegate: payload.data.delegate };
    }

      case 'UP_VOTE': {

          const upvotes = state.delegate.upvotes + 1
          return { ...state,
              delegate: {
                ...state.delegate,
                  upvotes : upvotes
              }
          };
      }

    default: {
      return state;
    }
  }
};
