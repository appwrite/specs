```graphql
mutation {
    accountCreateRecoveryOTP(
        email: "email@example.com",
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
