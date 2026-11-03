```graphql
mutation {
    accountCreatePasskey(
        passkeyId: "<PASSKEY_ID>",
        name: "<NAME>"
    ) {
        _id
        _createdAt
        passkeyId
        expire
        publicKey
    }
}
```
