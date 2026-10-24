```graphql
mutation {
    migrationsCreateNHostMigration(
        resources: ["user"],
        subdomain: "<SUBDOMAIN>",
        region: "<REGION>",
        adminSecret: "<ADMIN_SECRET>",
        database: "<DATABASE>",
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
