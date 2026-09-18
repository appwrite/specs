```graphql
mutation {
    usersCreateScryptUser(
        userId: "<USER_ID>",
        email: "email@example.com",
        password: "password",
        passwordSalt: "<PASSWORD_SALT>",
        passwordCpu: 8,
        passwordMemory: 65536,
        passwordParallel: 1,
        passwordLength: 64,
        name: "<NAME>"
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
