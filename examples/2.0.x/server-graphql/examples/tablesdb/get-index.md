```graphql
query {
    tablesDBGetIndex(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>"
    ) {
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
}
```
