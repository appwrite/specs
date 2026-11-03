```graphql
mutation {
    projectCreateEphemeralKey(
        scopes: ["users.read"],
        duration: 600
    ) {
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
```
