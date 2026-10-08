```graphql
mutation {
    accountUpdatePasskeyToken(
        challengeId: "<CHALLENGE_ID>",
        credential: "{}"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}
```
