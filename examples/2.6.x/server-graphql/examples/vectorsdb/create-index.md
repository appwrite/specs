```graphql
mutation {
    vectorsDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        type: "hnsw_euclidean",
        attributes: ["embeddings"],
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
