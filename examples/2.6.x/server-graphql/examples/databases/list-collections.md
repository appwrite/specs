```graphql
query {
    databasesListCollections(
        databaseId: "<DATABASE_ID>",
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        collections {
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
        }
    }
}
```
