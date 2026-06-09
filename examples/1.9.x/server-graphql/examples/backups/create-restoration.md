```graphql
mutation {
    backupsCreateRestoration(
        archiveId: "<ARCHIVE_ID>",
        services: [],
        newResourceId: "<NEW_RESOURCE_ID>",
        newResourceName: "<NEW_RESOURCE_NAME>"
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
mutation {
    backupsCreateRestoration(
        archiveId: "<ARCHIVE_ID>",
        services: [],
        newResourceId: "<NEW_RESOURCE_ID>",
        newResourceName: "<NEW_RESOURCE_NAME>"
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
