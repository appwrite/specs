```graphql
mutation {
    tablesDBUpdateDatetimeColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: "2020-10-15T06:38:00.000+00:00",
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
        format
        default
    }
}
```
