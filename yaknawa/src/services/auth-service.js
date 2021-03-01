import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (
  username,
  email,
  password,
  nickname,
  birthDay,
  sex,
  interestedM
) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
    email,
    nickname,
    birthDay,
    sex,
    interestedM,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
