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

  async createPost({ slug, title, content, image, status, userId }) {
    try {
      return await this.databases.createPost(slug, {
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

  async deletePost(slug) {
    try {
      await this.databases.deletePost(slug);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getPost(slug);
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseid,
        config.appWriteCollectionid,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  // file upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appWriteBucketid,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  // delete file services
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appWriteBucketid, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
const services = new Services();
export default services;
