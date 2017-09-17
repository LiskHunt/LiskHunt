const INITIAL_STATE = { delegates: [] };

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case "FETCH_DELEGATES_SUCCESS": {
      return { ...state, delegates: action.payload.data.list };
    }

    default: {
      return state;
    }
  }
};
