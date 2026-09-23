```graphql
mutation {
    postgresqlUpdateBackupStorage(
        databaseId: "<DATABASE_ID>",
        provider: "s3",
        bucket: "<BUCKET>",
        accessKey: "<ACCESS_KEY>",
        secretKey: "<SECRET_KEY>",
        region: "<REGION>",
        prefix: "<PREFIX>",
        endpoint: "<ENDPOINT>"
    ) {
        provider
        bucket
        region
        prefix
        endpoint
    }
}
```
