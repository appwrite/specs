```graphql
mutation {
    projectCreateEphemeralKey(
        scopes: [],
        duration: 1
    ) {
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
```
