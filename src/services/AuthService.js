import http from "../HttpCommon";

class AuthService {
  login(userCredentials) {
    return http.post("auth/authorize", userCredentials);
  }
}

export default new AuthService();
