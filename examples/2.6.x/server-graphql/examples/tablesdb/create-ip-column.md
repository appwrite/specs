```graphql
mutation {
    tablesDBCreateIpColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "<KEY>",
        required: false,
        default: "192.0.2.0",
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
