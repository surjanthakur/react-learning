import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appWriteurl)
      .setProject(config.appWriteProjectid);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, names }) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
