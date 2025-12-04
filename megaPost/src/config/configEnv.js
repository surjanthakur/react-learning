const ConfigEnv = {
  appwrite_Url: String(import.meta.env.vite_appwrite_url),
  appwrite_project_Id: String(import.meta.env.vite_appwrite_projectid),
  appwrite_database_Id: String(import.meta.env.vite_databaseid),
  appwrite_table_Id: String(import.meta.env.vite_tabelid),
  appwrite_bucket_Id: String(import.meta.env.vite_bucketid),
};

export default ConfigEnv;
