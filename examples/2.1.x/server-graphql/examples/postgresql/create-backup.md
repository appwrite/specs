```graphql
mutation {
    postgresqlCreateBackup(
        databaseId: "<DATABASE_ID>",
        type: "full"
    ) {
        _id
        _createdAt
        databaseId
        projectId
        policyId
        trigger
        type
        requestedType
        fallbackReason
        status
        sizeBytes
        startedAt
        completedAt
        verifiedAt
        expiresAt
        logPosition
        error
    }
}
```
