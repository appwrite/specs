```graphql
query {
    usersGetPasskey(
        userId: "<USER_ID>",
        passkeyId: "<PASSKEY_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        accessedAt
    }
}
```
