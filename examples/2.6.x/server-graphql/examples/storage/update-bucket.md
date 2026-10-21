```graphql
mutation {
    storageUpdateBucket(
        bucketId: "<BUCKET_ID>",
        name: "<NAME>",
        permissions: ["read(\"any\")"],
        fileSecurity: false,
        enabled: false,
        maximumFileSize: 1,
        allowedFileExtensions: [],
        compression: "none",
        encryption: false,
        antivirus: false,
        transformations: false,
        description: "<DESCRIPTION>",
        stripMetadata: false
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
