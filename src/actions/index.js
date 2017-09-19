import axios from "axios";
import app_settings from "../config";

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

    console.log('CHECKPOINT')
    return {
      type: "FETCH_PROFILE_SUCCESS",
      payload: mock_request
    };
  } catch (error) {
    return {
      type: "FETCH_PROFILE_ERROR",
      payload: error.message
    };
  }

};
