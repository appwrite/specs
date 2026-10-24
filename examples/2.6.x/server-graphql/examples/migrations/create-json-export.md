```graphql
mutation {
    migrationsCreateJSONExport(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        filename: "<FILENAME>",
        columns: [],
        queries: [],
        notify: false
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
