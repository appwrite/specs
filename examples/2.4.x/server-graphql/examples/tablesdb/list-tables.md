```graphql
query {
    tablesDBListTables(
        databaseId: "<DATABASE_ID>",
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        tables {
            _id
            _createdAt
            _updatedAt
            _permissions
            databaseId
            name
            enabled
            rowSecurity
            columns
            indexes {
                _id
                _createdAt
                _updatedAt
                key
                type
                status
                error
                columns
                lengths
                orders
            }
            bytesMax
            bytesUsed
        }
    }
}
```
