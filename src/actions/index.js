import axios from 'axios';
import app_settings from '../config';

export const fetchDelegates = async () => {
  try {
    const request = axios.get(`${app_settings.backend_url}/get_delegates_list`);

    return {
      type: 'FETCH_DELEGATES_SUCCESS',
      payload: request,
    };
  } catch (error) {
    return {
      type: 'FETCH_DELEGATES_ERROR',
      payload: error.message,
    };
  }
};

export const fetchProfile = async id => {
  try {
    const request = axios.get(`${app_settings.backend_url}/delegate/${id}`);

    return {
      type: 'FETCH_PROFILE_SUCCESS',
      payload: request,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const setActivePage = async page => {
  try {
    return {
      type: 'SET_ACTIVE_PAGE',
      payload: page,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const sortResources = async (resources, type) => {

  try {

    let new_resources = resources;

    switch (type) {
      case 'Newest': {
        new_resources = resources.slice(0).reverse();
        break;
      }

      case 'Magic': {
        new_resources = resources.sort(() => {
          return Math.random() - 0.1;
        });
        break;
      }

      default: {
        new_resources = resources;
      }
    }

    return {
      type: 'SET_RESOURCES',
      payload: new_resources,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const setSortBy = async type => {
  try {
    return {
      type: 'SET_SORT_BY',
      payload: type,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const setFilterBy = async type => {
  try {
    return {
      type: 'SET_FILTER_BY',
      payload: type,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const filterResources = async type => {
  try {

    const filter = type !== "None" ? `?filter=${type}` : "";
    const request = axios.get(`${app_settings.backend_url}/resources${filter}`);

    return {
      type: 'FETCH_RESOURCES_SUCCESS',
      payload: request,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const getVotes = async id => {
  try {
    const votes = axios.get(`${app_settings.backend_url}/vote/${id}`);

    return {
      type: 'FETCH_VOTES',
      payload: votes,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};


export const upVote = async name => {
    try {
        const request = axios.get(
            `${app_settings.backend_url}/upvote/delegate/${name}`,
        );
        return {
            type: 'UP_VOTE',
            payload: request,
        };
    } catch (error) {
        return {
            type: 'ERROR',
            payload: error.message,
        };
    }
}

export const addVote = async id => {
    try {
        const votes = axios.get(`${app_settings.backend_url}/add_vote/${id}`);

        return {
            type: 'ADD_VOTE',
            payload: votes,
        };
    } catch (error) {
        return {
            type: 'ERROR',
            payload: error.message,
        };
    }
};

export const getViews = async id => {
  try {
    const views = axios.get(`${app_settings.backend_url}/views/${id}`);

    return {
      type: 'FETCH_VIEWS',
      payload: views,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const getResources = async () => {
    try {
        const request = axios.get(`${app_settings.backend_url}/resources`);

        return {
            type: 'FETCH_RESOURCES_SUCCESS',
            payload: request,
        };
    } catch (error) {
        return {
            type: 'FETCH_RESOURCES_ERROR',
            payload: error.message,
        };
    }
};

export const getResource = async id => {
    try {
        const request = axios.get(`${app_settings.backend_url}/resource/${id}`);

        return {
            type: 'FETCH_RESOURCE',
            payload: request
        };
    } catch (error) {
        return {
            type: 'ERROR',
            payload: error.message,
        };
    }
};

export const setManuelSubmit = async type => {
  try {
    return {
      type: 'SET_MANUAL_SUBMIT',
      payload: type,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error.message,
    };
  }
};

export const setActiveResponsiveMenu = async active => {
    try {
        return {
            type: 'SET_ACTIVE_RESPONSIVE_MENU',
            payload: active,
        };
    } catch (error) {
        return {
            type: 'ERROR',
            payload: error.message,
        };
    }
};
