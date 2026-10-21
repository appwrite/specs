```graphql
mutation {
    mongoDeleteBackup(
        databaseId: "<DATABASE_ID>",
        backupId: "<BACKUP_ID>"
    ) {
        status
    }
}
```
