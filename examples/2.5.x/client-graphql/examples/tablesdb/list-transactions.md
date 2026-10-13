```graphql
query {
    tablesDBListTransactions(
        queries: [],
        total: false
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
