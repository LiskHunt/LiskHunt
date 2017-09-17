import axios from 'axios';
import app_settings from '../config';

export const openProfile = () => ({type : 'OPEN_PROFILE'})


export const fetchDelegates = async () => {

    try{
        const request = axios.get(`${app_settings.backend_url}/get_delegates_list`)

        return {
            type: 'FETCH_DELEGATES_SUCCESS',
            payload: request
        }

    }catch (error) {

        console.error('something went wrong: ', error.message)
        return {
            type: 'FETCH_DELEGATES_ERROR',
            payload: error.message
        }
    }

}