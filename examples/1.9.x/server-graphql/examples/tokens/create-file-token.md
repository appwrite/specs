```graphql
mutation {
    tokensCreateFileToken(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        expire: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}
mutation {
    tokensCreateFileToken(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        expire: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}
```
