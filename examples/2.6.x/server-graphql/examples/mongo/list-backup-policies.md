```graphql
query {
    mongoListBackupPolicies(
        databaseId: "<DATABASE_ID>",
        queries: [],
        total: false
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
            type
            enabled
        }
    }
}
```
