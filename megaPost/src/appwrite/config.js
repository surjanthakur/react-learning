import { Client, Databases, Storage } from 'appwrite';
import ConfigEnv from '../config/configEnv';

export class DatabseServices {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(ConfigEnv.appwrite_Url)
      .setProject(ConfigEnv.appwrite_project_Id);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, image, status, userId }) {
    try {
      return await this.databases.createDocument({
        databaseId: ConfigEnv.appwrite_database_Id,
        collectionId: ConfigEnv.appwrite_table_Id,
        documentId: slug,
        data: {
          title,
          content,
          image,
          status,
          userId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument({
        databaseId: ConfigEnv.appwrite_database_Id,
        collectionId: ConfigEnv.appwrite_table_Id,
        documentId: slug,
        data: {
          title,
          slug,
          content,
          image,
          status,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getpost(slug) {
    try {
      return await this.databases.getDocument({
        databaseId: ConfigEnv.appwrite_database_Id,
        collectionId: ConfigEnv.appwrite_table_Id,
        documentId: slug,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument({
        databaseId: ConfigEnv.appwrite_database_Id,
        collectionId: ConfigEnv.appwrite_table_Id,
        documentId: slug,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

const services = new DatabseServices({});

export default services;
