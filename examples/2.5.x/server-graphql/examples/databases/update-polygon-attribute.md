```graphql
mutation {
    databasesUpdatePolygonAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        required: false,
        default: [[[1, 2], [3, 4], [5, 6], [1, 2]]],
        newKey: "<NEW_KEY>"
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
```
