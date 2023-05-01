import Cookies from "js-cookie";
import HttpService from "./http.service";
import { throws } from "assert";

interface LoginValue {
  email: string;
  password: string;
}

interface RegisterValue {
  email: string;
  password: string;
  name: String;
  password_confirmation: String;
}

class AuthService {
  public static isLogin = (): boolean => {
    const cookie = Cookies.get("token");

    return cookie !== null && cookie !== "" && cookie !== undefined;
  };

  public static saveAuthToken = (token: string) => {
    Cookies.set("token", token);
  };

  public static removeAuthToken = () => {
    Cookies.remove("token");
  };

  public static login = async (data: LoginValue) => {
    const resp = await HttpService.post("login", data);
    if (resp.status === 200) {
      this.saveAuthToken(resp.data.data.access_token);
    }
    return resp;
  };

  public static register = async (data: RegisterValue) => {
    const resp = await HttpService.post("register", data);
    return resp;
  };

  public static logout = async () => {
    const resp = await HttpService.post("logout", null);
    if (resp.status == 200) {
      this.removeAuthToken();
    }
    return resp;
  };
}

export default AuthService;
