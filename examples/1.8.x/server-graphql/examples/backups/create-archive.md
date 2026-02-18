```graphql
mutation {
    backupsCreateArchive(
        services: [],
        resourceId: "<RESOURCE_ID>"
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
