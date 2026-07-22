```graphql
query {
    databasesList(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        databases {
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
}
```
