import qs from 'qs';
const CLIENT_ID = 'd56d002712508d0';
const ROOT_URL = 'https://api.imgur.com';

export default {
  loging() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
};
