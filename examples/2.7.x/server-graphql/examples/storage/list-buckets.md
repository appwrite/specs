```graphql
query {
    storageListBuckets(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        buckets {
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
}
```
