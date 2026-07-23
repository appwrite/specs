```graphql
query {
    documentsDBGetIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: ""
    ) {
        _id
        _createdAt
        _updatedAt
        key
        type
        status
        error
        attributes
        lengths
        orders
    }
}
```
