require('dotenv').config();
const axios = require('axios');

const TopazApi = require('../../src/topaz');
const random = require('./random');

const apiKey = () => {
  const email = random.hexString(6) + '@' + random.hexString(6) + '.com';
  const password = random.hexString(20);

  return new Promise((resolve, reject) => {
    axios.post(process.env.BASE_PATH + '/users', { email, password })
      .then(_ => axios.post(process.env.BASE_PATH + '/auth/login', { email, password }))
      .then(res => axios.post(process.env.BASE_PATH + '/tokens', {}, { headers: { 'Authorization': res.data.token } }))
      .then(res => res.data.token)
      .then(apiKey => resolve(apiKey))
      .catch(err => reject(err));
  });
}

const freshInstanceLegacy = () => {
  return apiKey().then(apiKey => {
    const opts = { basePath: process.env.BASE_PATH, apiKey };
    return new TopazApi.ApiClient(opts)
  });
}

module.exports = { freshInstanceLegacy }
