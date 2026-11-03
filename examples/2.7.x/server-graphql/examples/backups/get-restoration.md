```graphql
query {
    backupsGetRestoration(
        restorationId: "<RESTORATION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        archiveId
        policyId
        status
        startedAt
        migrationId
        services
        resources
        options
    }
}
```
