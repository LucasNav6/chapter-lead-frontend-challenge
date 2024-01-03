import axios from "axios";

const firebaseAxios = axios.create({
  baseURL: process.env.FIREBASE_AUTH_DOMAIN
});

const {CancelToken} = axios;
const source = CancelToken.source();

firebaseAxios.interceptors.request.use((config) => {
  config.cancelToken = source.token;
  return config;
});

setTimeout(() => {
  source.cancel("Request canceled due to timeout. Please try again later.");
}, 4000);
