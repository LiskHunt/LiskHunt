import { resources, labels } from '../lib/resources/resources';

const INITIAL_STATE = { resources: resources, labels: labels, sortBy : 'Magic', filterBy : 'None' };

export default (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {

        case "SET_RESOURCES" : {
            return { ...state, resources: action.payload };
        }

        case "SET_SORT_BY" : {
            return { ...state, sortBy: action.payload };
        }

        case "SET_FILTER_BY" : {
            return { ...state, filterBy: action.payload };
        }

        default: {
            return state;
        }
    }
};
