import envConfig from "../envConfig";
import { Client, Account, ID, Storage, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  //   constructor
  constructor() {
    this.client
      .setEndpoint(envConfig.projectUrl)
      .setProject(envConfig.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //   create Post
  async craeatePost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Error in createPost ");
    }
  }

  //   Update Post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Error in Update Post ", error);
    }
  }

  //   delete post
  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        env.appwriteDatabaseId,
        env.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error in delete Post", error);
      return false;
    }
  }

  //   Get single post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        env.appwriteDatabaseId,
        env.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error in getPost", error);
    }
  }

  //   Get all posts
  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error in gettling allPosts", error);
    }
  }

  //   upload file
  async uploadFile(file) {
    try {
      await this.bucket.createFile(
        envConfig.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error in the file uploading", error);
    }
  }
  // Delete File
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(envConfig.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Error in deleting file");
    }
  }

  //   get file preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(envConfig.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
