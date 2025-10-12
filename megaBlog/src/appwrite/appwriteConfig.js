import config from "../config/config";
import { Client, Account, ID, TablesDB, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appWriteurl)
      .setProject(config.appWriteProjectid);
    this.database = TablesDB(this.client);
    this.bucket = Storage(this.client);
  }
}

const services = new Services();

export default services;
