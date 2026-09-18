```graphql
query {
    mongoGetRestoration(
        databaseId: "<DATABASE_ID>",
        restorationId: "<RESTORATION_ID>"
    ) {
        _id
        _createdAt
        databaseId
        sourceDatabaseId
        projectId
        backupId
        type
        status
        targetTime
        startedAt
        completedAt
        error
    }
}
```
