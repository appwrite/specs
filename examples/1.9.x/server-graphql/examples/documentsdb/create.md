```graphql
mutation {
    documentsDBCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false,
        specification: "serverless",
        replicas: 0,
        syncMode: "async"
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        status
        engine
        specification
        replicas
        error
        containerStatus
        lifecycleState
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
            type
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
