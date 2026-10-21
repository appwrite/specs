```graphql
query {
    storageGetBucket(
        bucketId: "<BUCKET_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        fileSecurity
        name
        description
        enabled
        maximumFileSize
        allowedFileExtensions
        compression
        encryption
        antivirus
        transformations
        stripMetadata
        totalSize
    }
}
```
