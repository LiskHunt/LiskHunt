const INITIAL_STATE = { delegates: [], delegate: {} };

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case "FETCH_DELEGATES_SUCCESS": {
      return { ...state, delegates: action.payload.data.list };
    }

      case "FETCH_PROFILE_SUCCESS": {
        return { ...state, delegate: action.payload };
      }

    default: {
      return state;
    }
  }
};
