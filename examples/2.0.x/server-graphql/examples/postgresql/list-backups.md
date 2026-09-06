```graphql
query {
    postgresqlListBackups(
        databaseId: "<DATABASE_ID>",
        queries: []
    ) {
        total
        backups {
            _id
            _createdAt
            databaseId
            projectId
            policyId
            trigger
            type
            requestedType
            fallbackReason
            status
            sizeBytes
            startedAt
            completedAt
            verifiedAt
            expiresAt
            logPosition
            error
        }
    }
}
```
