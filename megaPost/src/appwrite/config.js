import { Account, Client } from 'appwrite';
import ConfigEnv from '../config/configEnv';

export class DatabseServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(ConfigEnv.appwrite_Url)
      .setProject(ConfigEnv.appwrite_project_Id);

    this.account = new Account(this.client);
  }
}

const services = new DatabseServices();

export default services;
