```graphql
query {
    organizationListKeys(
        queries: [],
        total: false
    ) {
        total
        keys {
            _id
            _createdAt
            _updatedAt
            name
            expire
            scopes
            secret
            accessedAt
            sdks
        }
    }
}
```
