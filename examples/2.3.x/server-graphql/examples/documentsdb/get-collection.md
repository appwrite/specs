```graphql
query {
    documentsDBGetCollection(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        enabled
        documentSecurity
        attributes
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
        bytesMax
        bytesUsed
    }
}
```
