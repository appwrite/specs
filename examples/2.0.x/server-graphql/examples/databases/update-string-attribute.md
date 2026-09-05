```graphql
mutation {
    databasesUpdateStringAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        required: false,
        default: "Hello World",
        size: 1,
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
        size
        default
        encrypt
    }
}
```
