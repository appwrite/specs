```graphql
query {
    databasesGetDocument(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documentId: "<DOCUMENT_ID>",
        queries: [],
        transactionId: "<TRANSACTION_ID>"
    ) {
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
```
