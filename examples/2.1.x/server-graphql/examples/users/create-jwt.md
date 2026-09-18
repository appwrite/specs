```graphql
mutation {
    usersCreateJWT(
        userId: "<USER_ID>",
        sessionId: "recent()",
        duration: 0
    ) {
        jwt
    }
}
```
