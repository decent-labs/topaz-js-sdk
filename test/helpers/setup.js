require('dotenv').config();
const axios = require('axios');

const TopazApi = require('../../src/topaz');
const topaz = require('../../src/index');
const random = require('./random');

const apiSetup = () => {
  const email = random.hexString(6) + '@' + random.hexString(6) + '.com';
  const password = random.hexString(20);

  return new Promise((resolve, reject) => {
    axios.post(process.env.BASE_PATH + '/users', { email, password })
      .then(_ => axios.post(process.env.BASE_PATH + '/auth/login', { email, password }))
      .then(res => axios.post(process.env.BASE_PATH + '/tokens', {}, { headers: { 'Authorization': res.data.token }}))
      .then(res => Promise.all([res.data.token, axios.post(process.env.BASE_PATH + '/apps', { name: 'test app', interval: 3600 }, { headers: { 'Authorization': res.data.token }})]))
      .then(([ apiKey, res ]) => resolve({ apiKey, appId: res.data.id }))
      .catch(err => reject(err));
  });
}

const freshInstanceLegacy = () => {
  return apiSetup().then(({ apiKey, appId }) => {
    return new TopazApi.ApiClient({ basePath: process.env.BASE_PATH, apiKey, appId })
  });
}

const freshInstance = () => {
  return apiSetup().then(({ apiKey, appId }) => {
    return topaz({ basePath: process.env.BASE_PATH, apiKey, appId });
  });
}

module.exports = { freshInstanceLegacy, freshInstance }
