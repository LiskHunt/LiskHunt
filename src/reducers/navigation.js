const INITIAL_STATE = { active_page: '/', hideManualSubmit: true, active_responsive_menu: false };

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case 'SET_ACTIVE_PAGE': {
      return { ...state, active_page: action.payload, active_responsive_menu:false };
    }

    case 'SET_MANUAL_SUBMIT': {
      return { ...state, hideManualSubmit: action.payload };
    }

      case 'SET_ACTIVE_RESPONSIVE_MENU': {
          return { ...state, active_responsive_menu: action.payload };
      }

    default: {
      return state;
    }
  }
};
