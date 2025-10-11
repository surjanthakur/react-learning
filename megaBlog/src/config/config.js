const conf = {
  appWriteurl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteBucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appWriteCollectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
};

export default conf;
