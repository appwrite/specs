```graphql
query {
    backupsGetArchive(
        archiveId: "<ARCHIVE_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        policyId
        size
        status
        startedAt
        migrationId
        services
        resources
        resourceId
        resourceType
    }
}
```
