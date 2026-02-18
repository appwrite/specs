```graphql
mutation {
    tablesDBCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        policies {
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
        archives {
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
}
```
