```graphql
mutation {
    tablesDBCreateEnumColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        elements: ["active", "inactive"],
        required: false,
        default: "active",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        elements
        format
        default
    }
}
```
