```graphql
query {
    storageGetFile(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>"
    ) {
        _id
        bucketId
        _createdAt
        _updatedAt
        _permissions
        name
        folder
        key
        signature
        mimeType
        sizeOriginal
        sizeActual
        chunksTotal
        chunksUploaded
        encryption
        compression
    }
}
```
