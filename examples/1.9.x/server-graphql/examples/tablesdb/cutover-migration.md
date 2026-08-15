```graphql
mutation {
    tablesDBCutoverMigration(
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
        verifiedAt
        cutoverAt
        soakUntil
        autoCutover
        cutoverRequested
        paused
    }
}
mutation {
    tablesDBCutoverMigration(
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
        verifiedAt
        cutoverAt
        soakUntil
        autoCutover
        cutoverRequested
        paused
    }
}
```
