```graphql
mutation {
    tablesDBCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        policies {
            _id
            name
            _createdAt
            _updatedAt
            services
            resources
            resourceId
            resourceType
            retention
            schedule
            enabled
        }
        archives {
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
}
mutation {
    tablesDBCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        policies {
            _id
            name
            _createdAt
            _updatedAt
            services
            resources
            resourceId
            resourceType
            retention
            schedule
            enabled
        }
        archives {
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
}
```
