import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/typicode/demo/posts",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetcList = () => {
  return instance.get("", {});
};
