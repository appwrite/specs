```graphql
query {
    databasesGetAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>"
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
        default
    }
}
```
