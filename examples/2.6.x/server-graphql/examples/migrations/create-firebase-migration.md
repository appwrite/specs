```graphql
mutation {
    migrationsCreateFirebaseMigration(
        resources: ["user"],
        serviceAccount: "<SERVICE_ACCOUNT>"
    ) {
        _id
        _createdAt
        _updatedAt
        status
        stage
        source
        destination
        resources
        resourceId
        resourceInternalId
        resourceType
        parentResourceId
        parentResourceInternalId
        parentResourceType
        destinationResourceId
        destinationResourceInternalId
        destinationResourceType
        statusCounters
        resourceData
        errors
        options
    }
}
```
