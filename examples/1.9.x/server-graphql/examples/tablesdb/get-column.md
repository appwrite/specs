```graphql
query {
    tablesDBGetColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: ""
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
    }
}
```
