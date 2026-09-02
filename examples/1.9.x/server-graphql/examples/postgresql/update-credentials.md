```graphql
mutation {
    postgresqlUpdateCredentials(
        databaseId: "<DATABASE_ID>"
    ) {
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
```
