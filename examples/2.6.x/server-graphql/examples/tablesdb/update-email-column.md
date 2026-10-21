```graphql
mutation {
    tablesDBUpdateEmailColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: "email@example.com",
        newKey: "<NEW_KEY>",
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
