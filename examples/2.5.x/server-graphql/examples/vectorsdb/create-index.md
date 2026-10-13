```graphql
mutation {
    vectorsDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        type: "hnsw_euclidean",
        attributes: ["embeddings"],
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
