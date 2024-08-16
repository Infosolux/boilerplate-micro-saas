import { config } from '@/config';
import * as Minio from 'minio';

let minioClient: Minio.Client;

if (config.minio.useMinio) {
  minioClient = new Minio.Client({
    endPoint: config.minio.endPoint,
    port: config.minio.port,
    accessKey: config.minio.accessKey,
    secretKey: config.minio.secretKey,
    useSSL: config.minio.useSSL,
  });
}

function minioIsEnabled() {
  if (!config.minio.useMinio) {
    throw new Error('Minio is not enabled');
  }
}

export function useMinio() {
  minioIsEnabled();
  return minioClient;
}

export async function createBucketIfNotExists(bucketName: string) {
  minioIsEnabled();
  const bucketExists = await minioClient.bucketExists(bucketName);
  if (!bucketExists) {
    await minioClient.makeBucket(bucketName);
  }
}

export async function uploadFile(bucketName: string, objectName: string, filePath: string) {
  minioIsEnabled();
  await minioClient.fPutObject(bucketName, objectName, filePath);
}

export async function getFile(bucketName: string, objectName: string) {
  minioIsEnabled();
  const file = await minioClient.getObject(bucketName, objectName);
  return file;
}

export async function listObjects(bucketName: string) {
  minioIsEnabled();
  const objects = await minioClient.listObjects(bucketName);
  return objects;
}

export async function removeObject(bucketName: string, objectName: string) {
  minioIsEnabled();
  await minioClient.removeObject(bucketName, objectName);
}

export async function removeObjects(bucketName: string, objectNames: string[]) {
  minioIsEnabled();
  await minioClient.removeObjects(bucketName, objectNames);
}