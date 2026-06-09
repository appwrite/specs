```graphql
query {
    usersListMFAFactors(
        userId: "<USER_ID>"
    ) {
        totp
        phone
        email
        recoveryCode
    }
}
```
