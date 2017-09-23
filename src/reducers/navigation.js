const INITIAL_STATE = { active_page: '/', hideManualSubmit: true };

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case 'SET_ACTIVE_PAGE': {
      return { ...state, active_page: action.payload };
    }

    case 'SET_MANUAL_SUBMIT': {
      return { ...state, hideManualSubmit: action.payload };
    }

    default: {
      return state;
    }
  }
};
