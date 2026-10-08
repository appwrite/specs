```graphql
mutation {
    tablesDBDecrementRowColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        column: "<COLUMN>",
        value: 1,
        min: 0,
        transactionId: "<TRANSACTION_ID>"
    ) {
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
```
