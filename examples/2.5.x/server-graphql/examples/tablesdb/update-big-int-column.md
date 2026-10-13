```graphql
mutation {
    tablesDBUpdateBigIntColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: 0,
        min: 0,
        max: 1000000,
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
