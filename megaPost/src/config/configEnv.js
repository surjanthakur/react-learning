const ConfigEnv = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_DATABASE_ID,
  tableId: import.meta.env.VITE_TABLE_ID,
  bucketId: import.meta.env.VITE_BUCKET_ID,
};

export default ConfigEnv;
