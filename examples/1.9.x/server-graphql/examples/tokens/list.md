```graphql
query {
    tokensList(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        queries: [],
        total: false
    ) {
        total
        tokens {
            _id
            _createdAt
            resourceId
            resourceType
            expire
            secret
            accessedAt
        }
    }
}
```
