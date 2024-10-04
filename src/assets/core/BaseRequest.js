import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/";

export default {
  getHeader() {
    let token = window.localStorage.getItem("token_user");
    if (token == null) {
      return {};
    }
    return {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    };
  },
  get(url) {
    return axios.get(apiUrl + url, { headers: this.getHeader() });
  },
  post(url, data) {
    return axios.post(apiUrl + url, data, { headers: this.getHeader() });
  },
  put(url, data) {
    return axios.put(apiUrl + url, data, { headers: this.getHeader() });
  },
  delete(url, data) {
    return axios.delete(apiUrl + url, data, { headers: this.getHeader() });
  },
};