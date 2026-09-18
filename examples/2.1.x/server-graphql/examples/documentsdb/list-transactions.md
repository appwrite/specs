```graphql
query {
    documentsDBListTransactions(
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
