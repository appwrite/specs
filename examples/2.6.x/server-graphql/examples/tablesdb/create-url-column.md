```graphql
mutation {
    tablesDBCreateUrlColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: "https://example.com",
        array: false,
        description: "<DESCRIPTION>"
    ) {
        key
        description
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
