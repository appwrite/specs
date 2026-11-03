```graphql
query {
    migrationsList(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        migrations {
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
}
```
