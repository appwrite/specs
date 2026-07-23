```graphql
mutation {
    vectorsDBCreateDocument(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documentId: "<DOCUMENT_ID>",
        data: "{\"embeddings\":[0.12,-0.55,0.88,1.02],\"metadata\":{\"key\":\"value\"}}",
        permissions: ["read("any")"]
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
mutation {
    vectorsDBCreateDocument(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documentId: "<DOCUMENT_ID>",
        data: "{\"embeddings\":[0.12,-0.55,0.88,1.02],\"metadata\":{\"key\":\"value\"}}",
        permissions: ["read("any")"]
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
