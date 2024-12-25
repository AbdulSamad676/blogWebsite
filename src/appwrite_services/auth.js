import envConfig from "../envConfig";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(envConfig.projectUrl)
      .setProject(envConfig.projectId);
    this.account = new Account(this.client);
  }

  async createAcount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call login method
      } else {
        return "ERROR WHITE CREATING ACCROUNT";
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite Error");
    }
    return null;
  }
  async logoutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite Error");
    }
  }
}

const authService = new AuthService();
export default authService;
