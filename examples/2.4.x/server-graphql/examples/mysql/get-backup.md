```graphql
query {
    mysqlGetBackup(
        databaseId: "<DATABASE_ID>",
        backupId: "<BACKUP_ID>"
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
