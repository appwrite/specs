```graphql
mutation {
    vectorsDBUpdateCollection(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        name: "<NAME>",
        dimension: 4,
        permissions: ["read(\"any\")"],
        documentSecurity: false,
        enabled: false,
        description: "<DESCRIPTION>"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        description
        enabled
        documentSecurity
        attributes
        indexes {
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
        bytesMax
        bytesUsed
        dimension
    }
}
```
