```graphql
mutation {
    databasesUpdateEnumAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        elements: ["active", "inactive"],
        required: false,
        default: "active",
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
        elements
        format
        default
    }
}
```
