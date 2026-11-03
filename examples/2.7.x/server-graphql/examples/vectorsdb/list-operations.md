```graphql
query {
    vectorsDBListOperations(
        databaseId: "<DATABASE_ID>",
        status: "queued",
        limit: 1,
        offset: 0
    ) {
        total
        operations {
            _id
            _createdAt
            databaseId
            type
            status
            attempts
            requestedAt
            startedAt
            completedAt
            errorCode
            errorMessage
        }
    }
}
```
