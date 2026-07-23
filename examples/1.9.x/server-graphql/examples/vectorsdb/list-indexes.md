```graphql
query {
    vectorsDBListIndexes(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [],
        total: false
    ) {
        total
        indexes {
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
}
```
