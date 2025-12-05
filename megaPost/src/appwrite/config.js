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
}

const services = new DatabseServices();

export default services;
