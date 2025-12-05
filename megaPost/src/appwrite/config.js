import { Client, Databases } from 'appwrite';
import ConfigEnv from '../config/configEnv';

export class DatabseServices {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(ConfigEnv.appwrite_Url)
      .setProject(ConfigEnv.appwrite_project_Id);

    this.database = new Databases(this.client);
  }
}

const services = new DatabseServices();

export default services;
