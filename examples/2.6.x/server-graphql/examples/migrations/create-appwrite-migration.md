```graphql
mutation {
    migrationsCreateAppwriteMigration(
        resources: ["user"],
        endpoint: "https://example.com",
        projectId: "<PROJECT_ID>",
        apiKey: "<API_KEY>",
        onDuplicate: "fail"
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
