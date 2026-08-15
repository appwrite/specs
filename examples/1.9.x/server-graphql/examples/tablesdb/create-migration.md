```graphql
mutation {
    tablesDBCreateMigration(
        databaseId: "<DATABASE_ID>",
        specification: "s-1vcpu-1gb",
        autoCutover: false
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
    tablesDBCreateMigration(
        databaseId: "<DATABASE_ID>",
        specification: "s-1vcpu-1gb",
        autoCutover: false
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
