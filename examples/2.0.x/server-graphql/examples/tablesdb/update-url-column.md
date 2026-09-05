```graphql
mutation {
    tablesDBUpdateUrlColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: "https://example.com",
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
