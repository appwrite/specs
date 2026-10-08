```graphql
query {
    databasesGetTransaction(
        transactionId: "<TRANSACTION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        status
        operations
        expiresAt
    }
}
```
