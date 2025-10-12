import config from "../config/config";
import { Client, Account, ID, Databases, Query } from "appwrite";

export class Services {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appWriteurl)
      .setProject(config.appWriteProjectid);
  }
}

const services = new Services();

export default services;
