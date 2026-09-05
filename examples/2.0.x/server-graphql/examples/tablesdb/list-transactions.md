```graphql
query {
    tablesDBListTransactions(
        queries: []
    ) {
        total
        transactions {
            _id
            _createdAt
            _updatedAt
            status
            operations
            expiresAt
        }
    }
}
```
