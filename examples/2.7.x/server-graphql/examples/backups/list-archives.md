```graphql
query {
    backupsListArchives(
        queries: [],
        total: false
    ) {
        total
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
