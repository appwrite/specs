```graphql
query {
    tablesDBListOperations(
        databaseId: "<DATABASE_ID>",
        status: "running",
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
