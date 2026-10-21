```graphql
query {
    usersGetMFAChallenge(
        userId: "<USER_ID>",
        challengeId: "<CHALLENGE_ID>"
    ) {
        _id
        _createdAt
        userId
        expire
        code
    }
}
```
