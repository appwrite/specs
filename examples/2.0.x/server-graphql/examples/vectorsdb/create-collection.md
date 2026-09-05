```graphql
mutation {
    vectorsDBCreateCollection(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        name: "<NAME>",
        dimension: 1,
        permissions: ["read(\"any\")"],
        documentSecurity: false,
        enabled: false
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
        dimension
    }
}
```
