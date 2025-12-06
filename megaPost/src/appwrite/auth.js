import { Account, Client, ID } from 'appwrite';
import ConfigEnv from '../config/configEnv';

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(ConfigEnv.appwriteUrl)
      .setProject(ConfigEnv.projectId);

    this.account = new Account(this.client);
  }

  //   signup  user
  async createAccount({ email, password, name }) {
    try {
      const newAccount = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });

      if (newAccount) return this.login({ email, password });
    } catch (err) {
      throw err;
    }
  }

  //   login user
  async login({ email, password }) {
    try {
      const user = await this.account.createEmailPasswordSession({
        email: email,
        password: password,
      });

      if (user) return user;
    } catch (err) {
      throw err;
    }
  }

  //   get current user
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  //   log-out session
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (err) {
      console.log(err);
    }
  }
}

const authservice = new AuthService();

export default authservice;
