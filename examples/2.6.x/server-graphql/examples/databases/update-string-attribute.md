```graphql
mutation {
    databasesUpdateStringAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        required: false,
        default: "Hello World",
        size: 1,
        newKey: "<NEW_KEY>",
        description: "<DESCRIPTION>"
    ) {
        key
        description
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
