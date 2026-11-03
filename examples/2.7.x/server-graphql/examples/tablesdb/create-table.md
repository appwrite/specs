```graphql
mutation {
    tablesDBCreateTable(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        name: "<NAME>",
        permissions: ["read(\"any\")"],
        rowSecurity: false,
        enabled: false,
        columns: [],
        indexes: [],
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
        rowSecurity
        columns
        indexes {
            _id
            _createdAt
            _updatedAt
            key
            description
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
