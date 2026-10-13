```graphql
mutation {
    tablesDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        type: "key",
        columns: ["username"],
        orders: [],
        lengths: []
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
