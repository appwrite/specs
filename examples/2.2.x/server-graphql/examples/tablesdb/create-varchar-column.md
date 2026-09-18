```graphql
mutation {
    tablesDBCreateVarcharColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        size: 1,
        required: false,
        default: "Hello World",
        array: false,
        encrypt: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        size
        default
        encrypt
    }
}
```
