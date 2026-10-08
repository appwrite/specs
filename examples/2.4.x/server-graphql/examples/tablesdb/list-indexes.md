```graphql
query {
    tablesDBListIndexes(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        queries: [],
        total: false
    ) {
        total
        indexes {
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
}
```
