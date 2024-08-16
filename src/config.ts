export const config = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL as string,
  keyDbUrl: process.env.KEYDB_URL as string,
  minio: {
    useMinio: process.env.MINIO_USE === 'true',
    endPoint: process.env.MINIO_ENDPOINT as string,
    port: parseInt(process.env.MINIO_PORT as string),
    accessKey: process.env.MINIO_ACCESS_KEY as string,
    secretKey: process.env.MINIO_SECRET_KEY as string,
    useSSL: process.env.MINIO_USE_SSL === 'true',
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY as string,
    secretKey: process.env.STRIPE_SECRET_KEY as string,
    plans: {
      free: {
        priceId: process.env.STRIPE_FREE_PLAN as string,
      },
    },
  }
}