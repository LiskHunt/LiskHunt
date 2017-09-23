const INITIAL_STATE = { resource: {},
    description: '',
    votes: 0,
    views: 0,
    upVoted: false
};

export default (state = INITIAL_STATE, action) => {
    const { type , payload } = action;

    switch (type) {

        case "FETCH_VOTES" : {
            const votes =  payload.data.votes || 0;
            const upVoted = payload.data.upVoted;
            return { ...state, votes: votes , upVoted : upVoted};
        }


        case "FETCH_RESOURCE" : {
            const resource =  payload.resource;
            const description = payload.description;
            return { ...state, resource: resource , description : description};
        }

        case "FETCH_VIEWS" : {
            const views =  payload.data.views || 0;
            return { ...state, views: views};
        }

        default: {
            return state;
        }
    }
};
