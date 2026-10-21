```graphql
query {
    presencesList(
        queries: [],
        total: false,
        ttl: 0
    ) {
        total
        presences {
            _id
            _createdAt
            _updatedAt
            _permissions
            userId
            status
            source
            expiresAt
            metadata
        }
    }
}
```
