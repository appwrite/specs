```graphql
query {
    tokensGet(
        tokenId: "<TOKEN_ID>"
    ) {
        _id
        _createdAt
        resourceId
        resourceType
        expire
        secret
        accessedAt
    }
}
```
