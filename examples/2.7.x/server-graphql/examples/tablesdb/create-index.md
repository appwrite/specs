```graphql
mutation {
    tablesDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        type: "key",
        columns: ["username"],
        orders: [],
        lengths: [],
        description: "<DESCRIPTION>"
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
