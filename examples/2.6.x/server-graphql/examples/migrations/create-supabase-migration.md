```graphql
mutation {
    migrationsCreateSupabaseMigration(
        resources: ["user"],
        endpoint: "https://example.com",
        apiKey: "<API_KEY>",
        databaseHost: "<DATABASE_HOST>",
        username: "<USERNAME>",
        password: "password",
        port: 5432
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
