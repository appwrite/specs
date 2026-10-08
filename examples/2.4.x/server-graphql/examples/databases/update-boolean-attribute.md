```graphql
mutation {
    databasesUpdateBooleanAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        required: false,
        default: false,
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
