```graphql
mutation {
    accountCreateEmailVerificationOTP(
        phrase: false
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
