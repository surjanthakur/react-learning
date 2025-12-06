import { Client, Databases, Query, Storage } from 'appwrite';
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

  // create post
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

  // update post
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

  // get post by id
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

  // get active posts only
  async getAllPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments({
        databaseId: ConfigEnv.appwrite_database_Id,
        collectionId: ConfigEnv.appwrite_table_Id,
        queries: queries,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // delete post by id
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

  // image file upload services --------------------------------->

  // upload file
  async uploadFile(file) {
    try {
      return await this.storage.createFile({
        bucketId: ConfigEnv.appwrite_bucket_Id,
        fileId: ID.unique(),
        file: file,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // delete file
  async deleteFile(id) {
    try {
      await this.storage.deleteFile({
        bucketId: ConfigEnv.appwrite_bucket_Id,
        fileId: id,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}

const services = new DatabseServices({});

export default services;
