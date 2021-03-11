import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, gender, birthday, email, nickname, interestedM) {
    return axios.post(API_URL + "register", {
      username,
      password,
      gender,
      birthday,
      email,
      nickname,
      interestedM,
    });
  }
}

export default new AuthService();
