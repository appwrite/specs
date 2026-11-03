```graphql
query {
    postgresqlGetRestoration(
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
        restoreMode
        status
        targetTime
        startedAt
        completedAt
        error
    }
}
```
