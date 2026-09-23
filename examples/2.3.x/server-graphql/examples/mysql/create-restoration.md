```graphql
mutation {
    mysqlCreateRestoration(
        databaseId: "<DATABASE_ID>",
        type: "backup",
        backupId: "<BACKUP_ID>",
        targetDatabaseId: "<TARGET_DATABASE_ID>",
        targetTime: "2020-10-15T06:38:00.000+00:00"
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
