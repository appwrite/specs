```graphql
mutation {
    accountUpdatePasskey(
        passkeyId: "<PASSKEY_ID>",
        name: "<NAME>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        accessedAt
    }
}
```
