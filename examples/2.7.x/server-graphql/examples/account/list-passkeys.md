```graphql
query {
    accountListPasskeys(
        queries: [],
        total: false
    ) {
        total
        passkeys {
            _id
            _createdAt
            _updatedAt
            name
            accessedAt
        }
    }
}
```
