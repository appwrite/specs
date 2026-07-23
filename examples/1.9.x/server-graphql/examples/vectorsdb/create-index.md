```graphql
mutation {
    vectorsDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "",
        type: "hnsw_euclidean",
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
mutation {
    vectorsDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "",
        type: "hnsw_euclidean",
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
