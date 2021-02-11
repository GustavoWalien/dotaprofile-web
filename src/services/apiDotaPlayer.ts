import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.opendota.com/api/proPlayers',
});

export default api;
