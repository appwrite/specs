```graphql
query {
    projectListKeys(
        queries: [],
        total: false
    ) {
        total
        keys {
            _id
            _createdAt
            _updatedAt
            name
            description
            expire
            scopes
            secret
            accessedAt
            sdks
        }
    }
}
```
