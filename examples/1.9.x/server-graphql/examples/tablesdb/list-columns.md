```graphql
query {
    tablesDBListColumns(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        queries: [],
        total: false
    ) {
        total
        columns
    }
}
```
