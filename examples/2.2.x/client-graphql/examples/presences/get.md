```graphql
query {
    presencesGet(
        presenceId: "<PRESENCE_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        userId
        status
        source
        expiresAt
        metadata
    }
}
```
