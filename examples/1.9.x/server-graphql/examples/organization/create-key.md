```graphql
mutation {
    organizationCreateKey(
        keyId: "<KEY_ID>",
        name: "<NAME>",
        scopes: [],
        expire: "2020-10-15T06:38:00.000+00:00"
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
