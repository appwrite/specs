```graphql
query {
    mongoListRestorations(
        databaseId: "<DATABASE_ID>",
        status: "pending",
        type: "backup",
        limit: 1,
        offset: 0
    ) {
        total
        restorations {
            _id
            _createdAt
            databaseId
            sourceDatabaseId
            projectId
            backupId
            type
            restoreMode
            status
            targetTime
            startedAt
            completedAt
            error
        }
    }
}
```
