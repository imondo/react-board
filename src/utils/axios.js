import axios from "axios";
import qs from "qs";
import auth from "./auth";

const service = axios.create({
  baseURL: process.env.API, // api base_url
  timeout: 10000 // 请求超时时间
});

/* 错误处理 */
const errStatus = [401, 502] // 需要退出的 service code
const err = error => {
  if (error.response) {
    if (errStatus.includes(error.response.status)) {
      // 退出
    } else {
      console.log('服务异常，请刷新重试!')
    }
  } else {
    // 请求超时
    const isTimeout = error.message.includes("timeout");
    console.log(
      isTimeout ? "请求已超时，请刷新或检查互联网连接" : "请检查网络是否已连接"
    );
  }
  return Promise.reject(error);
};

service.interceptors.request.use(config => {
  const token = auth.get();
  if (token) {
    config.headers["token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  if (config.method === "post") {
    if (config.headers["Content-Type"] !== "multipart/form-data") {
      config.data = qs.stringify(config.data);
    }
  }
  return config;
}, err);

service.interceptors.response.use(response => {
  if (response.status !== 200) {
    return Promise.reject(response.data);
  }
  /* 对blob下载特殊处理 */
  if (response.config.responseType === "blob") {
    return response;
  }
  return response.data;
}, err);

export default service;
