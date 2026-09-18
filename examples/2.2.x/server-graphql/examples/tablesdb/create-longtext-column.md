```graphql
mutation {
    tablesDBCreateLongtextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
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
        default
        encrypt
    }
}
```
