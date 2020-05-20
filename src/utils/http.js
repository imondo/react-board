import axios from "./axios";

const http = {
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: data
        })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  post(url, data, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then(res => {
          if (res.code === 200) {
            resolve(res);
          } else {
            console.log(res.message)
            reject(res);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default http;