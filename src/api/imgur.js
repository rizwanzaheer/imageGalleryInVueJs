import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'd56d002712508d0';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages() {
    return axios.get(`${ROOT_URL}/3/account/me/images`);
  }
};
