import config from "../config/config";
import { Client, Account, ID, Storage, Query, Databases } from "appwrite";

export class Services {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appWriteurl)
      .setProject(config.appWriteProjectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, image, status, userId }) {
    try {
      return await this.databases.createPost(ID.unique(), {
        title,
        content,
        image,
        status,
        userId,
      });
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updatePost(slug, {
        title,
        content,
        image,
        status,
      });
    } catch (error) {
      throw error;
    }
  }
}

const services = new Services();
export default services;
