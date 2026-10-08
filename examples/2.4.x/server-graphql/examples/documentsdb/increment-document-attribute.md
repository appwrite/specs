```graphql
mutation {
    documentsDBIncrementDocumentAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documentId: "<DOCUMENT_ID>",
        attribute: "<ATTRIBUTE>",
        value: 1,
        max: 100,
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
