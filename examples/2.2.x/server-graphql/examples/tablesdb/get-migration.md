```graphql
query {
    tablesDBGetMigration(
        databaseId: "<DATABASE_ID>",
        migrationId: "<MIGRATION_ID>"
    ) {
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
```
