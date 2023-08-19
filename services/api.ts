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

export const getQuestions = () => {
  return instance.get("/posts", {});
};

export const getAnswers = () => {
    return instance.get("/comments", {});
};
export const postNewQuestion = (body: { title: string; question: string }) => {
  return instance.post("/posts", body );
};

export const postNewAnswer = (body: { postId: string; body: string }) => {
    return instance.post("/comments", body );
};