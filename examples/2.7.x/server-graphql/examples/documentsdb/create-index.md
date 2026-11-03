```graphql
mutation {
    documentsDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        type: "key",
        attributes: ["username"],
        orders: [],
        lengths: [],
        description: "<DESCRIPTION>"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        description
        type
        status
        error
        attributes
        lengths
        orders
    }
}
```
