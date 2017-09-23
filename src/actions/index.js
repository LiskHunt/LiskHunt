import axios from "axios";
import app_settings from "../config";
import { resources } from '../lib/resources/resources';

export const fetchDelegates = async () => {
  try {
    const request = axios.get(`${app_settings.backend_url}/get_delegates_list`);

    return {
      type: "FETCH_DELEGATES_SUCCESS",
      payload: request
    };
  } catch (error) {
    return {
      type: "FETCH_DELEGATES_ERROR",
      payload: error.message
    };
  }
};

export const fetchProfile = async (id) => {

  try {
    // const request = axios.get(`${app_settings.backend_url}/delegate/${id}`);

    const mock_request = new Promise((resolve, reject) =>{

      return resolve({"_id":"59b4377b1af86bd25f7c1865","delegate_name":"vekexasia","delegate_contact":"vekexasia","delegate_github":"https://api.github.com/users/vekexasia","delegate_img_url":"https://avatars2.githubusercontent.com/u/200523?v=4","applications_count":2,"likes":3,"app_count":2,"donations_1":0,"donations_2":0,"donations_3":0,"total_donations":0,"ranking":23})

    });

    return {
      type: "FETCH_PROFILE_SUCCESS",
      payload: mock_request
    };
  } catch (error) {
    return {
      type: "ERROR",
      payload: error.message
    };
  }

};

export const setActivePage = async (page) => {
    try {

        return {
            type: "SET_ACTIVE_PAGE",
            payload: page
        };

    } catch (error) {
        return {
            type: "ERROR",
            payload: error.message
        };
    }
};

export const sortResources = async (resources, type) => {

    try {

        let new_resources = resources

        switch(type){

            case 'Newest' : {
                new_resources = resources.slice(0).reverse()
            }

            case 'Magic' : {
                new_resources = resources.sort(() => {
                    return Math.random() - 0.1;
                });
            }

        }

        return {
            type: "SET_RESOURCES",
            payload: new_resources
        };

    } catch (error) {
        return {
            type: "ERROR",
            payload: error.message
        };
    }
};

export const setSortBy = async (type) => {

    try {

        return {
            type: "SET_SORT_BY",
            payload: type
        };

    } catch (error) {
        return {
            type: "ERROR",
            payload: error.message
        };
    }
};

export const setFilterBy = async (type) => {

    try {

        return {
            type: "SET_FILTER_BY",
            payload: type
        };

    } catch (error) {
        return {
            type: "ERROR",
            payload: error.message
        };
    }
};

export const filterResources = async (type) => {

    try {

        let resourcesFiltered = resources.filter(res => res.category === type);
        if (type === 'None') resourcesFiltered = resources.slice(0);

        return {
            type: "SET_RESOURCES",
            payload: resourcesFiltered
        };

    } catch (error) {
        return {
            type: "ERROR",
            payload: error.message
        };
    }
};
