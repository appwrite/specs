```graphql
mutation {
    documentsDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        type: "key",
        attributes: [],
        orders: [],
        lengths: []
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
