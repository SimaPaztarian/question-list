import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/typicode/demo/db/",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchList = () => {

    return instance.get("", {});
};
