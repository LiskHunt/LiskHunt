const INITIAL_STATE = {
  resource: {},
  description: '',
  votes: 0,
  views: 0,
  upVoted: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_VOTES': {
      const votes = payload.data.votes || 0;
      const upVoted = payload.data.upVoted;
      return { ...state, votes: votes, upVoted: upVoted };
    }

      case 'ADD_VOTE_SUCCESS': {
          return { ...state, votes: payload.data };
      }

    case 'FETCH_RESOURCE': {
      return { ...state, resource: payload.data.resource };
    }

    case 'FETCH_VIEWS': {
      const views = payload.data.views || 0;
      return { ...state, views: views };
    }

    default: {
      return state;
    }
  }
};
