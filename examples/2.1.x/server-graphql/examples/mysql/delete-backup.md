```graphql
mutation {
    mysqlDeleteBackup(
        databaseId: "<DATABASE_ID>",
        backupId: "<BACKUP_ID>"
    ) {
        status
    }
}
```
