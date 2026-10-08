```graphql
query {
    backupsListRestorations(
        queries: []
    ) {
        total
        restorations {
            _id
            _createdAt
            _updatedAt
            archiveId
            policyId
            status
            startedAt
            migrationId
            services
            resources
            options
        }
    }
}
```
