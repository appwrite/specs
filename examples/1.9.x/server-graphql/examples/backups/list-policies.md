```graphql
query {
    backupsListPolicies(
        queries: []
    ) {
        total
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
    }
}
```
