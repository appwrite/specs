```graphql
query {
    vectorsDBListDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [],
        transactionId: "<TRANSACTION_ID>",
        total: false,
        ttl: 0
    ) {
        total
        documents {
            _id
            _sequence
            _collectionId
            _databaseId
            _createdAt
            _updatedAt
            _permissions
            data
        }
    }
}
```
