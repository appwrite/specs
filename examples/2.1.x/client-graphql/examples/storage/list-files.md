```graphql
query {
    storageListFiles(
        bucketId: "<BUCKET_ID>",
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        files {
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
}
```
