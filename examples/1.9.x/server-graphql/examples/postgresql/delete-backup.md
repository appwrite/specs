```graphql
mutation {
    postgresqlDeleteBackup(
        databaseId: "<DATABASE_ID>",
        backupId: "<BACKUP_ID>"
    ) {
        status
    }
}
```
