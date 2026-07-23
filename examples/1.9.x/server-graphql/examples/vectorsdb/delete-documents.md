```graphql
mutation {
    vectorsDBDeleteDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [],
        transactionId: "<TRANSACTION_ID>"
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
mutation {
    vectorsDBDeleteDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [],
        transactionId: "<TRANSACTION_ID>"
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
