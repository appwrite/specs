```graphql
query {
    usersListPasskeys(
        userId: "<USER_ID>",
        queries: [],
        total: false
    ) {
        total
        passkeys {
            _id
            _createdAt
            _updatedAt
            name
            accessedAt
        }
    }
}
```
