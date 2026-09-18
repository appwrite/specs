```graphql
mutation {
    databasesCreateIpAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        required: false,
        default: "192.0.2.0",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
```
