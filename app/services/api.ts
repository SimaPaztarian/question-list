import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchList = () => {
  return instance.get("/posts", {});
};

export const postNewQuestion = (body: { title: string; question: string }) => {
  return instance.post("/posts", body );
};
