```graphql
mutation {
    accountUpdateKey(
        keyId: "<KEY_ID>",
        name: "<NAME>",
        scopes: [],
        expire: ""
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
