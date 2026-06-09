```graphql
mutation {
    databasesUpdateTransaction(
        transactionId: "<TRANSACTION_ID>",
        commit: false,
        rollback: false
    ) {
        _id
        _createdAt
        _updatedAt
        status
        operations
        expiresAt
    }
}
mutation {
    databasesUpdateTransaction(
        transactionId: "<TRANSACTION_ID>",
        commit: false,
        rollback: false
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
