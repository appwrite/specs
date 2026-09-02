```graphql
query {
    tablesDBListMigrations(
        databaseId: "<DATABASE_ID>"
    ) {
        total
        migrations {
            _id
            _createdAt
            _updatedAt
            projectId
            databaseId
            specification
            phase
            attempt
            lastError
            lagDocuments
            changelogWatermark
            verifiedAt
            cutoverAt
            soakUntil
            autoCutover
            cutoverRequested
            paused
        }
    }
}
```
