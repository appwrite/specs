```graphql
mutation {
    tablesDBDeleteRows(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        queries: ["{\"method\":\"equal\", \"attribute\":\"$id\", \"values\":[\"<ROW_ID>\"]}"],
        transactionId: "<TRANSACTION_ID>"
    ) {
        total
        rows {
            _id
            _sequence
            _tableId
            _databaseId
            _createdAt
            _updatedAt
            _permissions
            data
        }
    }
}
```
