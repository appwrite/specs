```graphql
mutation {
    usersUpdatePhoneVerification(
        userId: "<USER_ID>",
        phoneVerification: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        emailCanonical
        emailIsFree
        emailIsDisposable
        emailIsCorporate
        emailIsCanonical
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
        impersonator
        impersonatorUserId
    }
}
```
