```graphql
mutation {
    usersUpdatePasskey(
        userId: "<USER_ID>",
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
