```graphql
mutation {
    tablesDBUpdateIntegerColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: 10,
        min: 0,
        max: 100,
        newKey: "<NEW_KEY>"
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        min
        max
        default
    }
}
```
