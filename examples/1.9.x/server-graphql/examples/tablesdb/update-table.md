```graphql
mutation {
    tablesDBUpdateTable(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        name: "<NAME>",
        permissions: ["read("any")"],
        rowSecurity: false,
        enabled: false,
        purge: false
    ) {
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
mutation {
    tablesDBUpdateTable(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        name: "<NAME>",
        permissions: ["read("any")"],
        rowSecurity: false,
        enabled: false,
        purge: false
    ) {
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
```
