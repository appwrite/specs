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
        description
        type
        status
        error
        columns
        lengths
        orders
    }
}
```
