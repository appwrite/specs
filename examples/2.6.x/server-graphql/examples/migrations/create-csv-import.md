```graphql
mutation {
    migrationsCreateCSVImport(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        internalFile: false,
        onDuplicate: "fail"
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
