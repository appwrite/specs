```graphql
mutation {
    projectUpdateKey(
        keyId: "<KEY_ID>",
        name: "<NAME>",
        scopes: ["users.read"],
        expire: "2020-10-15T06:38:00.000+00:00",
        description: "<DESCRIPTION>"
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
