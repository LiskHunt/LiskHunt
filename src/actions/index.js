import axios from 'axios';
import app_settings from '../config';
import { resources } from '../lib/resources/resources';
import descriptions from '../lib/resources/descriptions';
import Remarkable from 'remarkable';
const md = new Remarkable();

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
      }

      case 'Magic': {
        new_resources = resources.sort(() => {
          return Math.random() - 0.1;
        });
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
    let resourcesFiltered = resources.filter(res => res.category === type);
    if (type === 'None') resourcesFiltered = resources.slice(0);

    return {
      type: 'SET_RESOURCES',
      payload: resourcesFiltered,
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

export const getResource = async id => {
  try {
    const resource = await resources.find(res => {
      return res.app_id === id;
    });

    const description = md.render(descriptions[resource.app_id]);

    return {
      type: 'FETCH_RESOURCE',
      payload: {
        resource,
        description,
      },
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
